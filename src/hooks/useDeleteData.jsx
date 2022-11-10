import { doc, deleteDoc } from "firebase/firestore";
import { toast } from "react-toastify";

export default function useDeleteData(db, nameRef, id) {
  const currentDoc = doc(db, nameRef, id);

  const handleDeleteDoc = () => {
    deleteDoc(currentDoc).then((response) => {
      toast.success("Xóa danh mục thành công", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    });
  };

  return [handleDeleteDoc];
}
