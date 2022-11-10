import { updateDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

export default function useUpdateData(db, path, id) {
  const docRef = doc(db, path, id);

  const handleUpdateDoc = (data) => {
    updateDoc(docRef, data).then(toast.success("Cập nhật thành công"));
  };

  return [handleUpdateDoc];
}
