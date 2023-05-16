import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import handleOnChangeName from "./NotesComponent";
import NotesComponent from "./NotesComponent";

test("Deberia traer una palabra o texto que cohincida en el HTML", () => {
  const { getByText } = render(<NotesComponent />);
  const linkElement = getByText(/Te invitamos a dejarnos tus comentarios/i);
  expect(linkElement).toBeInTheDocument();
});
