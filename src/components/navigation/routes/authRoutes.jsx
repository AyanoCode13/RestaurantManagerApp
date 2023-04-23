import { lazy } from "react";

export default [
  // Table Routes
  {
    index: true,
    path: "tables",
    element: lazy(() => import("../../pages/table/TablesPage")),
    data: async () => {
      const { getAllTables } = await import("../../../api/controllers/tablesController");
      return await getAllTables();
    },
  },
  {
    index: false,
    path: "tables/:tableId",
    element: lazy(() => import("../../pages/table/TablePage")),
    data: async () => {
      return [];
    },
  },
  {
    index: false,
    path:"stock",
    element: lazy(() => import("../../pages/stock/StockPage")),
    data: async () => {
      const { getAllStock } = await import("../../../api/controllers/stockController");
      return await getAllStock();; 
    }
  }
];
