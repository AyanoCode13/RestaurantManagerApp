export const TableModel = (size) => {
  return {
    size: Number(size),
    total: 0.0,
    booked: false,
    managed_by: "",
  };
};
export const add = async (size) => {
  const { add } = await import("../db/repository");
  const newTable = TableModel(size)
  const table = await add("tables", newTable); 
  return { id: table.id, ...newTable}
}
export const remove = async (data) => {
  const { remove } = await import("../db/repository");
  await remove("tables", data.id);
} 
export const update = async (data) => {
  const { update } = await import("../db/repository");
  await update("tables", data);
}
export const get = async (id) => {
  const { get } = await import("../db/repository");
  return await get("tables", id);
}
export const getAll = async () => {
  const { getAll } = await import("../db/repository");
  return await getAll("tables");
}
