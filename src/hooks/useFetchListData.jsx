import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function useFetchListData(db, refName) {
  const colRef = collection(db, refName);
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let tempData = [];
    onSnapshot(colRef, (resolve) => {
      const data = resolve.docs;
      data?.length > 0 &&
        data.forEach((doc) => {
          tempData.push({
            id: doc.id,
            ...doc.data(),
          });
        });
      setListData(tempData);
    });
  }, [colRef]);

  return [listData];
}
