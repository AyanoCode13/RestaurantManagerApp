const TableModel = (name, size, booked)=>{
    return {
        name: name,
        size: Number(size),
        total:0.0,
        booked: booked ?? false,
        managed_by: ""
    }
}
    
export const add =  async (name, size, booked)=>{
    const { tablesCollection } = await import("../../../db/firebase");
    const { addDoc } = await import("firebase/firestore");
    const tableModel = TableModel(name, size, booked)
    const table = await addDoc(tablesCollection, tableModel);
    return {id: table.id, ...tableModel}
}