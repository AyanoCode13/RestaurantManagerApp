import { Box, Tabs, Tab } from "@mui/material";

export default function StockPage() {
  const StockType = [{}]
  return <Box sx={{ width: "100%", typography: "body1" }}>
     <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs aria-label="basic tabs example">
          <Tab label="Item One"/>
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Box>
  </Box>;
}
