import { TextField } from "@mui/material";

export default ()=>{
    return [
        {
            id:"size",
            render:<TextField name="size" inputMode="numeric" type="number" label="Size" placeholder="Table Size" InputProps={{ inputProps: { min: 0 } }}/>,
        }
    ]
}