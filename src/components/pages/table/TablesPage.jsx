import { useLoaderData } from "react-router-dom";
import Table from "../../models/Table";
import { Button, Grid, Stack } from "@mui/material";
import addTableImage from "../../../assets/addTable.png";
import { useState } from "react";

export default function TablesPage() {
  const [tables, setTables] = useState(useLoaderData());
  const deleteTable = (table) => {
    setTables((prevTables) => prevTables.filter((t) => t.id !== table.id));
  };
  const addTable = (table) => {
    setTables((prevTables) => [...prevTables, table]);
  };

  return (
    <Stack spacing={2}>
      <Button variant="contained" onClick={()=>addTable()}>Add Table</Button>
      <Grid container direction={"row"} spacing={2}>
        {tables.map((table) => {
          return (
            <Table key={table.id} props={table} deleteTable={deleteTable} />
          );
        })}
      </Grid>
    </Stack>
  );
}
