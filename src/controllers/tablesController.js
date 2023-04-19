export const addTable = async ({name, size, booked}) => {
  const { add } = await import("../components/models/data/Table");
  return await add(name, size, booked);
};
