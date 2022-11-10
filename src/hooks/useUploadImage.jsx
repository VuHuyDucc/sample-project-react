import { useEffect, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../configs/firebase-config";

export default function async() {
  const [imageURL, setImageURL] = useState();
  const getImageURL = (url) => {};
  const handleUploadImage = async (file) => {
    const storageRef = ref(storage, "images/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    await uploadTask.on(
      "state_changed",
      (snapshot) => {
        switch (snapshot.state) {
          case "paused":
            break;
          case "running":
            break;
          default:
            break;
        }
      },
      (err) => {
        console.log(err);
      },
      async () => {
        await getDownloadURL(uploadTask.snapshot.ref).then(
          async (downloadURL) => {
            return downloadURL;
          }
        );
      }
    );
  };

  return [handleUploadImage, imageURL];
}
