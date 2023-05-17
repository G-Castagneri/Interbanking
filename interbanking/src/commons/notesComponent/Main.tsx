import "../../assets/Main.css";

const Main = ({
  handleOnChangeText,
  handleOnChangeName,
  textDescription,
  name,
  nameComplete,
  textComplete,
  addText,
  search,
  setSearch,
}: {
  handleOnChangeText: any;
  handleOnChangeName: any;
  textDescription: string;
  name: string;
  nameComplete: boolean;
  textComplete: boolean;
  addText: any;
  search: string;
  setSearch: any;
}) => {
  return (
    <>
      <div>
        <div className="container_area">
          <input
            value={name}
            onChange={(event) => handleOnChangeName(event)}
            placeholder="Ingrese su nombre"
            maxLength={40}
            data-testid="input"
          ></input>
          <textarea
            data-testid="textarea"
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
    </>
  );
};

export default Main;
