import { lazy } from "react"

export default [
    // Table Routes
    {
        index:true,
        path: "tables",
        element:lazy(()=>import("../../pages/table/TablesPage")),
        action:async ({ params, request }) => {
            let formData = await request.formData();
            console.log(formData)
            return [];
        },
        data:async () => { return [
            {
                id:1,
                name:"Table 1",
                capacity:4,
                status:"occupied",
            },
            {
                id:2,
                name:"Table 2",
                capacity:4,
                status:"occupied",
            },
            {
                id:3,
                name:"Table 3",
                capacity:4,
                status:"occupied",
            },
        ]},
    },
    {
        index:false,
        path: "tables/:tableId",
        element:lazy(() => import("../../pages/table/TablePage")),
        data: async () => { return []}
    }
]