import React, { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../../configs/firebase-config";

import IconImage from "../../../components/icon/IconImage";
import { useForm } from "react-hook-form";
import Input from "../../../components/ui/input/Input";
import useAddData from "../../../hooks/useAddData";
import { db } from "../../../configs/firebase-config";

const ThumbImage = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-200">
      <div className="text-gray-300">
        <IconImage width={"100px"} height={"100px"}></IconImage>
      </div>
    </div>
  );
};

const AddCategory = () => {
  const { control, handleSubmit } = useForm({
    mode: onchange,
  });
  const [handleAddData] = useAddData();
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

  const handleChangeInputImg = (e) => {
    const file = e.target.files[0];

    handleUploadImage(file);
  };

  const handleAddCategory = async (values) => {
    values.img = imageLink;

    handleAddData(db, "categories", values);
  };

  return (
    <form onSubmit={handleSubmit(handleAddCategory)}>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex gap-3 flex-col">
          <Input
            name="name"
            placeholder="Nhập tên danh mục"
            control={control}
          />

          <input
            type="file"
            multiple
            accept="image/png, image/gif, image/jpeg"
            onChange={handleChangeInputImg}
          />

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-medium duration-300 hover:bg-blue-400"
          >
            Thêm danh mục
          </button>
        </div>

        <div className="w-full aspect-video overflow-hidden relative">
          {imageLink ? (
            <img
              src={imageLink}
              alt=""
              className="w-full h-full object-cover"
            />
          ) : (
            <ThumbImage />
          )}
          {!imageLink && (
            <div
              className="absolute h-1 bottom-0 left-0 bg-blue-500 duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          )}
        </div>
      </div>
    </form>
  );
};

export default AddCategory;
