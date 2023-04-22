import {
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  Grid,
  IconButton,
} from "@mui/material";
import CircleIcon from '@mui/icons-material/Circle';
import DeleteIcon from '@mui/icons-material/Delete';
import image from "../.././assets/table.png";
import { useState } from "react";

export default function Table({ props, deleteTable }) {
  const [booked, setBooked] = useState(props.booked);
  const handleDelete = async () => {
    await deleteTable(props);
  }
  const handleBooked = async () => {
    const { modifyTable } = await import("../../api/controllers/tablesController");
    await modifyTable({ ...props, booked: !booked });
    setBooked(!booked);
  }
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: 400, backgroundColor:"lightblue", border:"1px solid black"}} onClick={()=>{console.log(props.id)}} variant="outlined">
        <CardHeader avatar={<IconButton onClick={handleBooked}><CircleIcon color={booked ? "error" : "success"} /></IconButton> } title={booked ? "Unavailable" : "Available"} subheader={"Size:" + props.size + " Total:"+props.total}/>
        <CardMedia
          component="img"
          alt="green iguana"
          height={150}
          width={150}
          image={image}
        />
        <CardActions style={{ justifyContent: "center" }}>
          <IconButton
            variant="contained"
            size="large"
            color="error"
            onClick={handleDelete}
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
