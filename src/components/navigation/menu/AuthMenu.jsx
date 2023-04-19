import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';
import InventoryIcon from '@mui/icons-material/Inventory';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
export default [
    {
        path:"/tables",
        icon:<TableRestaurantIcon />,
        text:<Typography component={"h4"}>Tables</Typography>
    },
    {
        path:"/stock",
        icon:<InventoryIcon />,
        text:<Typography component={"h4"}>Stock</Typography>
    },
    {
        path:"/staff",
        icon:<PeopleAltIcon />,
        text:<Typography component={"h4"}>Staff</Typography>

    },
    {
        path:"/schedule",
        icon:<CalendarMonthIcon />,
        text:<Typography component={"h4"}>Schedule</Typography>
    }
]