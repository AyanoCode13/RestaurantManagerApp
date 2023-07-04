import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Button, Stack, TextField } from "@mui/material";
import { useLoaderData } from "react-router-dom";

function TabPanel(props) {
  console.log("TabPanel")
  const { children, value, index, ...other } = props;
  console.log(children.name)

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children.name}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function StockPage() {
  const [stock, setStock] = useState(useLoaderData());
  const [value, setValue] = useState(0);
  const [visible, setVisible] = useState(false);
  const [stockName, setStockName] = useState([]);


  const handleChange = (event, newValue) => {
    console.log(value)
    console.log(newValue)
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Stack direction={"row"}>
          <Tabs
            value={value}
            variant="scrollable"
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            {stock.map((stockType) => {
              console.log(stockType);
              return (
                <Tab
                  label={stockType.name}
                  {...a11yProps(stockType)}
                  sx={{ marginRight: 1}}
                />
              );
            })}
          </Tabs>
          <Button
              variant="contained"
              onClick={() => {
                setVisible(!visible);
              }}
            >
              Add Stock Type
            </Button>
          {visible && (
            <Stack direction={"row"}>
              <TextField
                type="text"
                inputMode="text"
                placeholder="Stock Name"
                onChange={(e) => {
                  setStockName(e.target.value);
                }}
              />
              <Button 
                variant="contained"
                onClick={async() => {
                  const { addStock } = await import("../../../api/controllers/stockController");
                  const newStock = await addStock(stockName);
                  setStock((prevStock) => [...prevStock, newStock]);
                  setVisible(false);
                }}
              >
                Add
              </Button>
            </Stack>
          )}
        </Stack>
      </Box>
      {stock.map((item, index) => {
        console.log(item)
        return (
          <TabPanel value={value} index={index} key={item.id}>
            {item}
          </TabPanel>
        );
      })}
    </Box>
  );
}
