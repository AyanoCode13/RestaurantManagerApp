export const addTable = async ({size, booked}) => {
  const { add } = await import("../models/Table");
  return await add(size, booked);
};
export const removeTable = async (data) => {
  const { remove } = await import("../models/Table");
  await remove(data);
}
export const modifyTable = async (data) => {
  const { update } = await import("../models/Table");
  await update(data);
}