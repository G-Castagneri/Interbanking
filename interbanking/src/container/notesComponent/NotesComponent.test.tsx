import { render, fireEvent } from "@testing-library/react";
import NotesComponent from "./NotesComponent";

test("Muestra un elemento que contiene el texto ", () => {
  const { getByText } = render(<NotesComponent />);
  const linkElement = getByText(/Te invitamos a dejarnos tus comentarios/i); // Si se cambia este texto por uno que no este en el elemento debería fallar
  expect(linkElement).toBeInTheDocument();
});


test('Verifica el estado del textarea y lo actualiza al escribir', () => {
  const { getByTestId } = render(<NotesComponent />);
  const textarea = getByTestId('textarea') as HTMLTextAreaElement;

  fireEvent.change(textarea, { target: { value: 'Interbanking' } });// Si se cambia este texto por uno distinto al expect de la siguiente linea deberia fallar

  expect(textarea.value).toBe('Interbanking');
});

test('Verifica el estado del input y lo actualiza al escribir', () => {
  const { getByTestId } = render(<NotesComponent />);
  const input = getByTestId('input') as HTMLTextAreaElement;

  fireEvent.change(input, { target: { value: 'Carlos' } });// Si se cambia este texto por uno distinto al expect de la siguiente linea deberia fallar

  expect(input.value).toBe('Carlos');
});