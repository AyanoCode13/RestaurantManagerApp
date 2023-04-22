export const addTable = async (data) => {
  const { add } = await import("../models/Table");
  return await add(data)
};
export const removeTable = async (data) => {
  const { remove } = await import("../models/Table");
  await remove(data);
}
export const modifyTable = async (data) => {
  const { update } = await import("../models/Table");
  await update(data);
}
export const getTable = async (id) => {
  const { get } = await import("../models/Table");
  return await get(id);
}

export const getAllTables = async () => {
  const { getAll } = await import("../models/Table");
  return await getAll();
}