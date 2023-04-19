import {
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  CardContent,
  Grid,
} from "@mui/material";
import image from "../.././assets/table.png";
import { Form } from "react-router-dom";

export default function Table({ props, deleteTable }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: 400 }}>
        <CardHeader title={props.name} />
        <CardMedia
          component="img"
          alt="green iguana"
          height={150}
          width={150}
          image={image}
        />
        <CardContent></CardContent>
        <CardActions style={{ justifyContent: "center" }}>
          <Button
            variant="contained"
            size="large"
            color="error"
            onClick={() => deleteTable(props)}
          >
            Delete
          </Button>
          <Button variant="contained" size="large">
            View
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
