import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../../components/ui/input/Input";

const HeroForm = ({ data }) => {
  const { control, handleSubmit } = useForm({
    mode: onchange,
  });
  const [imageLink, setImageLink] = useState();

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
  };

  return (
    <div>
      <form>
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
          />

          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-medium duration-300 hover:bg-blue-400"
          >
            Thêm danh mục
          </button>
        </div>
      </form>
    </div>
  );
};

export default HeroForm;
