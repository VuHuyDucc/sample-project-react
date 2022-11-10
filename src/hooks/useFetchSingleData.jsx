import { useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";

export default function useFetchSingleData(db, path, id) {
  const docRef = doc(db, path, id);

  const handleFetchSingleData = () => {
    const data = onSnapshot(docRef, (response) => {
      let temp = {
        id: response.id,
        ...response.data(),
      };

      return temp;
    });

    return data;
  };

  return [handleFetchSingleData];
}
