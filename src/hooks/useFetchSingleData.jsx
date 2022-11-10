import { useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";

export default function useFetchSingleData(db, path, id) {
  const docRef = doc(db, path, id);
  const [data, setData] = useState();

  onSnapshot(docRef, (response) => {
    setData(response.data());
  });

  return [data];
}
