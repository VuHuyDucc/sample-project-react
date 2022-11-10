import React from "react";
import { useController } from "react-hook-form";

const Input = ({
  type = "text",
  name,
  control,
  defaultValue = "",
  ...props
}) => {
  const { field } = useController({
    name,
    control,
    defaultValue,
  });
  return (
    <input
      type={type}
      className="bg-white px-4 py-2 w-full text-zinc-900 outline-none duration-300 focus:shadow"
      name={name}
      id={name}
      {...field}
      {...props}
    />
  );
};

export default Input;
