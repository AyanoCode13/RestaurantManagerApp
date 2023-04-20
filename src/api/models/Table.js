const TableModel = (size, booked) => {
  return {
    size: Number(size),
    total: 0.0,
    booked: booked ?? false,
    managed_by: "",
  };
};

export const add = async (size, booked) => {
  const { tablesCollection } = await import("../db/firebase");
  const { addDoc } = await import("firebase/firestore");
  const tableModel = TableModel(size, booked);
  const table = await addDoc(tablesCollection, tableModel);
  return { id: table.id, ...tableModel };
};

export const remove = async (data) => {
  const { tablesCollection } = await import("../db/firebase");
  const { deleteDoc, doc } = await import("firebase/firestore");
  await deleteDoc(doc(tablesCollection, data.id));
};

export const update = async (data) => {
  const { tablesCollection } = await import("../db/firebase");
  const { updateDoc, doc } = await import("firebase/firestore");
  await updateDoc(doc(tablesCollection, data.id), data);
}