import { useLoaderData } from "react-router-dom";
import Table from "../../models/Table";
import { Grid, Stack } from "@mui/material";
import { useState } from "react";
import FormTemplate from "../../templates/FormTemplate";
import TableFormFields from "../../templates/FormFields/TableFormFields";

export default function TablesPage() {
  const [tables, setTables] = useState(useLoaderData());

  const removeTable = async (table)=>{
    const { deleteTable } = await import("./TableFunctions");
    setTables(tables.filter((t)=>t.id !== table.id));
    await deleteTable(table);
  }


  return (
    <Stack spacing={2}>
      <FormTemplate formFields={TableFormFields()} submit={async (data)=>{
        const { addTable } = await import("./TableFunctions");
        setTables([...tables, await addTable(data)]);
      }}/>
      <Grid container direction={"row"} spacing={2}>
        {tables.map((table) => {
          return (
            <Table key={table.id} props={table} deleteTable={removeTable} />
          );
        })}
      </Grid>
    </Stack>
  );
}
