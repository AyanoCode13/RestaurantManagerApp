export const addTable = async (data) => {
  const tablesController = await import(
    "../../../api/controllers/tablesController"
  );
  return await tablesController.addTable(data);
};
export const deleteTable = async (data) => {
  const tablesController = await import(
    "../../../api/controllers/tablesController"
  );
  await tablesController.removeTable(data);
}
export const updateTable = async (data) => {
  const tablesController = await import(
    "../../../api/controllers/tablesController"
  );
  await tablesController.modifyTable(data);
}