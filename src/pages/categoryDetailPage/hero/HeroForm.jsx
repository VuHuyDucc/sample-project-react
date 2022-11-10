import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { db, storage } from "../../../configs/firebase-config";
import { useForm } from "react-hook-form";
import Input from "../../../components/ui/input/Input";
import useUpdateData from "../../../hooks/useUpdateData";

const HeroForm = ({ data }) => {
  const id = useParams("id");
  const { control, handleSubmit } = useForm({
    mode: onchange,
  });
  const [handleUpdateDoc] = useUpdateData(db, "categories", id.id);
  const [imageLink, setImageLink] = useState();
  const [progress, setProgress] = useState();

  const handleUploadImage = async (file) => {
    const storageRef = ref(storage, "images/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);

    await uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progressCurrent =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progressCurrent);
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
            setImageLink(downloadURL);
          }
        );
      }
    );
  };

  const handleInputChange = (e) => {
    const file = e.target.files[0];

    handleUploadImage(file);
  };

  const handleUpdateCategory = (values) => {
    values.img = imageLink || data.img;

    handleUpdateDoc(values);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleUpdateCategory)}>
        <div className="flex gap-3 flex-col">
          <Input
            name="name"
            placeholder="Nhập tên danh mục"
            control={control}
            defaultValue={data.name}
          />

          <input
            type="file"
            multiple
            accept="image/png, image/gif, image/jpeg"
            onChange={handleInputChange}
          />

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-medium duration-300 hover:bg-blue-400"
          >
            Cập nhật danh mục
          </button>
        </div>
        <div className="w-full overflow-hidden aspect-video mt-3 relative bg-gradient-to-tr from-pink-300 to-blue-600 via-indigo-400">
          <img src={imageLink} alt="" className="w-full h-full object-cover" />

          <div
            className="absolute h-1 bottom-0 left-0 bg-emerald-700 duration-300"
            style={{
              width: `${progress}%`,
            }}
          ></div>
        </div>
      </form>
    </div>
  );
};

export default HeroForm;
