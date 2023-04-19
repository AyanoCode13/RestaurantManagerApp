import { TextField } from "@mui/material";

export default ()=>{
    return [
        {
            id:"name",
            render:<TextField name="name" inputMode="text" type="text" label="Name" placeholder="Table Name"/>,
            
        },
        {
            id:"size",
            render:<TextField name="size" inputMode="numeric" type="number" label="Size" placeholder="Table Size"/>,
        }
    ]
}