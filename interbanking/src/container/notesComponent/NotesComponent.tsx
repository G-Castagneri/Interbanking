import { useState, useEffect } from "react";

import "../../assets/Buttons.css";
import { Text, mockTexts } from "../../assets/MockText";

import Footer from "../../commons/notesComponent/Footer";
import Main from "../../commons/notesComponent/Main";
import Header from "../../commons/notesComponent/Header";
import Cards from "../../commons/notesComponent/Cards";

function NotesComponent() {
  const texts: Text[] = [...mockTexts];
  const [text, setText] = useState<Text[]>([...mockTexts]);
  const [id, setId] = useState<Text[]>([...mockTexts]);
  const [name, setName] = useState<string>("");
  const [textDescription, setTextDescription] = useState<string>("");
  const [idRandom, setIdRandom] = useState<string>("");
  const [nameComplete, setNameComplete] = useState<boolean>(false);
  const [textComplete, setTextComplete] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [deleted, setDeleted] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");

  function addText(event: any): void {
    if (textDescription !== "") {
      setDisabled(true);
      const newText: Text = {
        name: name,
        description: textDescription,
        id: idRandom,
      };
      setText([...text, newText]);
    }
    setName("");
    setTextDescription("");
    setNameComplete(false);
    setTextComplete(false);
  }

  function filterText(text: Text): any {
    if (!search) {
      // Si no hay búsqueda, devolvemos true para que todos los objetos sean mostrados
      return true;
    }
    // Convertimos la búsqueda a minúsculas para compararla con la descripción en minúsculas
    const searchLowerCase = search.toLowerCase();

    // si encuentro algo lo retorno ya sea por name o description
    return (
      text.description.toLowerCase().includes(searchLowerCase) ||
      text.name.toLowerCase().includes(searchLowerCase)
    );
  }

  function handleOnChangeText(event: any): void {
    setTextDescription(event.target.value);
    setTextComplete(event.target.value !== "");
  }

  function handleOnChangeName(event: any): void {
    console.log(typeof event);
    setName(event.target.value);
    setNameComplete(event.target.value !== "");
  }

  useEffect(() => {}, [nameComplete, textComplete, search]);

  function deleteText(id: string): void {
    //Filtro los objetos y excluyo el que recibo por parametro en la funcion
    const updatedData = text.filter((text) => text.id !== id);
    // Actualizamos el estado con los objetos filtrados
    setText(updatedData);
    setSearch("");
  }

  return (
    <>
      <Header />
      <Main
        handleOnChangeText={handleOnChangeText}
        handleOnChangeName={handleOnChangeName}
        textDescription={textDescription}
        name={name}
        nameComplete={nameComplete}
        textComplete={textComplete}
        addText={addText}
        search={search}
        setSearch={setSearch}
      />
      <section>
        {text.filter(filterText).map((text, index) => (
          <>
            <div key={index} className="card_container">
              <Cards deleted={deleted} text={text} deleteText={deleteText} />
            </div>
          </>
        ))}
      </section>
      <Footer />
    </>
  );
}

export default NotesComponent;
export { NotesComponent };
