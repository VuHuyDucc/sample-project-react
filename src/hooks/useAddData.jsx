import { addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";

export default function useAddData() {
  const handleAddData = (db, path, docData) => {
    const colRef = collection(db, path);

    addDoc(colRef, docData).then(() => {
      toast.success("Thêm danh mục thành công", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    });
  };

  return [handleAddData];
}
