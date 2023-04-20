import { Button, FormControl, IconButton, Stack, Typography } from "@mui/material";
import { Form } from "react-router-dom";
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function FormTemplate({ formFields, submit }) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target["name"].value,
      size: e.target["size"].value,
    };
    e.target.reset()
    await submit(data);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <FormControl>
          <Typography variant={"h1"} textAlign={"center"} color={"primary"} >Add a Table</Typography>
        </FormControl>
        <Stack direction={"row"} spacing={2}>
          {formFields.map((field) => {
            return (
              <FormControl key={field.id} sx={{ marginTop: 1 }}>
                {field.render}
              </FormControl>
            );
          })}
          <FormControl>
            <IconButton type="submit" variant="contained" color="primary" size="large">
              <AddCircleIcon sx={{fontSize:50}}/>
            </IconButton>
          </FormControl>
        </Stack>
      </Form>
    </div>
  );
}
