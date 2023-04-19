import { getDocs } from "firebase/firestore";
import { lazy } from "react";

export default [
  // Table Routes
  {
    index: true,
    path: "tables",
    element: lazy(() => import("../../pages/table/TablesPage")),
    action: async ( request ) => {
      const tablesController = await import("../../../controllers/tablesController");
      const formData = await request.formData();
      const data = {
        name:formData.get("name"),
        size:formData.get("size")
      }
      return await tablesController.addTable(data);
    },
    data: async () => {
      const { tablesCollection } = await import("../../../db/firebase");
      const tables = await getDocs(tablesCollection);   
      return tables.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
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
];
