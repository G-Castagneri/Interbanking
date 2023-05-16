import { useState, useRef, useEffect } from "react";
import "../../assets/Header.css";
import "../../assets/Notes.css";
import "../../assets/Footer.css";
import Logo from "../../assets/image/Interbanking-logo.jpeg";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import "../../assets/Buttons.css";

import { Text, mockTexts } from "../../assets/MockText";

import Footer from "../../commons/notesComponent/Footer";

//import EmptyTextarea from './EmptyTextArea'

function NotesComponent() {
  const texts: Text[] = [...mockTexts];
  const [text, setText] = useState<Text[]>([...mockTexts]);
  const [name, setName] = useState<string>("");
  const [textDescription, setTextDescription] = useState<string>("");
  const [nameComplete, setNameComplete] = useState(false);
  const [textComplete, setTextComplete] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const [deleted, setDeleted] = useState(true);
  const [search, setSearch] = useState<string>("");

  function addText(event: any): void {
    if (textDescription !== "") {
      setDisabled(true);
      const newText: Text = {
        name: name,
        description: textDescription,
      };
      setText([...text, newText]);
    }
    setName("");
    setTextDescription("");
    setNameComplete(false);
    setTextComplete(false);
  }

  function filterText(text: Text): boolean {
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
    setName(event.target.value);
    setNameComplete(event.target.value !== "");
  }

  useEffect(() => {}, [nameComplete, textComplete]);

  function deleteText(index: any) {
    // Creamos una copia del arreglo de objetos
    const newText = [...text];
    // Eliminamos el objeto correspondiente
    newText.splice(index, 1);
    // Actualizamos el estado
    setText(newText);
  }

  return (
    <>
      <header>
        <div className="header_container">
          <img src={Logo}></img>
          <h1>Bienvenido a Interbanking</h1>
        </div>
      </header>
      <title className="service_title">
        <h2>
          Te invitamos a dejarnos tus comentarios para que podamos conocer tu
          opinión y mejorar nuestra calidad de servicio.
        </h2>
      </title>
      <div>
        <div className="container_area">
          <input
            value={name}
            onChange={(event) => handleOnChangeName(event)}
            placeholder="Ingrese su nombre"
            maxLength={40}
          ></input>
          <textarea
            placeholder="Comentarios"
            className="areas_style"
            value={textDescription}
            maxLength={1000}
            onChange={(event) => handleOnChangeText(event)}
          />
          <button
            className={nameComplete && textComplete ? "" : "button_off"}
            onClick={addText}
          >
            Comentar!
          </button>

          <input
            placeholder="Busca tu post ya sea por nombre o comentario"
            type="text"
            value={search}
            maxLength={40}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>
      </div>
      <section>
        {text.filter(filterText).map((text, index) => (
          <div key={index} className="card_container">
            <Card
              sx={{
                minWidth: 100,
                maxWidth: 300,
                maxHeight: 200,
                overflowY: "auto",
              }}
            >
              <CardContent>
                <Typography>{text.name}</Typography>
                <Typography variant="body2">{text.description}</Typography>
              </CardContent>
              <CardActions>
                <button
                  onClick={deleteText}
                  className={deleted === false ? "button_off" : ""}
                >
                  Eliminar
                </button>
              </CardActions>
            </Card>
          </div>
        ))}
      </section>
      <Footer />
    </>
  );
}

export default NotesComponent;
export { NotesComponent };
