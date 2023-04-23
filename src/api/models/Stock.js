export const StockModel = (name) => {
    return {
        name: name,
    };
  };
  export const add = async (size) => {
    const { add } = await import("../db/repository");
    const newStock = StockModel(size)
    const table = await add("stock", newStock); 
    return { id: table.id, ...newStock}
  }
  export const remove = async (data) => {
    const { remove } = await import("../db/repository");
    await remove("stock", data.id);
  } 
  export const update = async (data) => {
    const { update } = await import("../db/repository");
    await update("stock", data);
  }
  export const get = async (id) => {
    const { get } = await import("../db/repository");
    return await get("stock", id);
  }
  export const getAll = async () => {
    const { getAll } = await import("../db/repository");
    return await getAll("stock");
  }
  