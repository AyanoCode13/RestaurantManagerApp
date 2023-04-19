import { Button, FormControl } from "@mui/material";
import { Form } from "react-router-dom";

export default function FormTemplate({ formFields, action, method, submit}) {

  return (
    <div>
      <Form action={action} method={method}>
        {formFields.map((field) => {
          return (
            <FormControl fullWidth key={field.id} sx={{ marginTop: 1 }}>
              {field.render}
            </FormControl>
          );
        })}
        <FormControl fullWidth sx={{marginTop:1}}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </FormControl>
      </Form>
    </div>
  );
}
