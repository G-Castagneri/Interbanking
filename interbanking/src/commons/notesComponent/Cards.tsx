import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Cards = ({
  deleted,
  text,
  deleteText,
}: {
  deleted: boolean;
  text: any;
  deleteText: any;
}) => {
  return (
    <>
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
            onClick={() => {
              deleteText(text.id);
            }}
            className={deleted === false ? "button_off" : ""}
          >
            Eliminar
          </button>
        </CardActions>
      </Card>
    </>
  );
};

export default Cards;
