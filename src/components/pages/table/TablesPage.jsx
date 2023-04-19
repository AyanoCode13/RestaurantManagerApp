import { useLoaderData, useActionData } from "react-router-dom";
import Table from "../../models/Table";
import { Grid, Stack } from "@mui/material";
import { useState } from "react";
import FormTemplate from "../../templates/FormTemplate";
import TableFormFields from "../../templates/FormFields/TableFormFields";

export default function TablesPage() {
  const [tables, setTables] = useState(useLoaderData());
  const actionData = useActionData();

  const deleteTable = (table) => {
    setTables((prevTables) => prevTables.filter((t) => t.id !== table.id));
  };
  const addTable = async () => {
   console.log(actionData)
  };

  return (
    <Stack spacing={2}>
      <FormTemplate formFields={TableFormFields()} action={"/tables"} method={"post"} submit={addTable}/>
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
