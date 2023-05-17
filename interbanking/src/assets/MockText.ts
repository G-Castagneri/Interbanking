const generateUniqueId = (): string => {
  const id = Math.random().toString(36).substr(2, 9);
  return id;
};
interface Text {
  name: string;
  description: string;
  id: string;
}
const mockTexts: Text[] = [
  {
    name: "Juan Pérez",
    description:
      "Excelente servicio, me ayudaron a resolver todos mis problemas de manera rápida y eficiente.",
    id: generateUniqueId(),
  },
  {
    name: "María Gómez",
    description:
      "Estoy muy satisfecha con el servicio recibido, el equipo fue muy profesional y amable.",
    id: generateUniqueId(),
  },
  {
    name: "Carlos Rodríguez",
    description:
      "Recomiendo ampliamente sus servicios, superaron mis expectativas en todos los aspectos.",
    id: generateUniqueId(),
  },
  {
    name: "Laura Fernández",
    description:
      "El trato recibido fue excepcional, me brindaron una atención personalizada y solucionaron todas mis dudas.",
    id: generateUniqueId(),
  },
  {
    name: "Pedro Martínez",
    description:
      "El servicio que ofrecen es de alta calidad, definitivamente los volveré a contactar en el futuro.",
    id: generateUniqueId(),
  },
  {
    name: "Ana Sánchez",
    description:
      "Gracias a su ayuda pude resolver un problema complicado de manera rápida y eficaz. ¡Los recomiendo!",
    id: generateUniqueId(),
  },
  {
    name: "Sofía López",
    description:
      "El equipo técnico es muy profesional, me explicaron todo detalladamente y me brindaron una solución perfecta.",
    id: generateUniqueId(),
  },
  {
    name: "Jorge Castro",
    description:
      "Quiero agradecerles por su excelente servicio, fueron muy amables y resolvieron mi inconveniente rápidamente.",
    id: generateUniqueId(),
  },
  {
    name: "Carmen Ramos",
    description:
      "Me impresionó la rapidez con la que atendieron mi solicitud, sin duda son expertos en lo que hacen.",
    id: generateUniqueId(),
  },
  {
    name: "Daniel Navarro",
    description:
      "Su servicio al cliente es inigualable, siempre estuvieron dispuestos a ayudarme en cada paso del proceso.",
    id: generateUniqueId(),
  },
];

export { mockTexts };
export type { Text };
