export const addStock = async (data) => {
    const { add } = await import("../models/Stock");
    return await add(data)
  };
  export const removeStock = async (data) => {
    const { remove } = await import("../models/Stock");
    await remove(data);
  }
  export const modifyStock = async (data) => {
    const { update } = await import("../models/Stock");
    await update(data);
  }
  export const getStock = async (id) => {
    const { get } = await import("../models/Stock");
    return await get(id);
  }
  
  export const getAllStock= async () => {
    const { getAll } = await import("../models/Stock");
    return await getAll();
  }