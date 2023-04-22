const { firestore } = await import("./firebase.js")
const { collection } = await import("firebase/firestore");

export const add = async (collection_name, model)=>{
    const { addDoc } = await import("firebase/firestore");
    return await addDoc(collection(firestore, collection_name), model)
}
export const remove = async (collection_name, id)=>{
    const { deleteDoc, doc } = await import("firebase/firestore");
    await deleteDoc(doc(collection(firestore, collection_name), id));
}
export const update = async (collection_name, data)=>{
    const { updateDoc, doc } = await import("firebase/firestore");
    
    await updateDoc(doc(collection(firestore, collection_name), data.id),data);
}
export const get = async (collection_name, id)=>{
    const { getDoc, doc } = await import("firebase/firestore");
    const docRef = doc(collection(firestore, collection_name), id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
        return docSnap.data()
    } else {
        return null
    }
}
export const getAll = async (collection_name)=>{
    const { getDocs, collection } = await import("firebase/firestore");
    const querySnapshot = await getDocs(collection(firestore, collection_name));
    const data = [];
    querySnapshot.forEach((doc) => {
        data.push({id:doc.id, ...doc.data()});
    });
    return data;
}   
