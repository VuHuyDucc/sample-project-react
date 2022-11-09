import { doc, deleteDoc } from "firebase/firestore";

export default function useDeleteData(db, nameRef, id) {
  const currentDoc = doc(db, nameRef, id);

  deleteDoc(currentDoc);
}
