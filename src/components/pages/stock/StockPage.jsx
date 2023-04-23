import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import { Button, Stack, TextField } from "@mui/material";
import { useLoaderData } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

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
          <Typography>{children}</Typography>
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
  const [stockTypes, setStockTypes] = useState(["Food", "Alcohool"]);
  const [visible, setVisible] = useState(false);
  const [stockName, setStockName] = useState([]);

  console.log(stock);

  const handleChange = (event, newValue) => {
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
                  setStockTypes((prevStock) => [...prevStock, newStock]);
                  setVisible(false);
                }}
              >
                Add
              </Button>
            </Stack>
          )}
        </Stack>
      </Box>
      {stock.map((stockType, index) => {
        return (
          <TabPanel value={stockType.name} index={index} key={index}>
            {stockType}
          </TabPanel>
        );
      })}
    </Box>
  );
}
