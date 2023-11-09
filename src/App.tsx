import { useMemo, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

interface FormData {
  name: string;
  description: string;
  price: string;
  avatar: string;
}

function App() {
  const [file, setFile] = useState<File>();
  const previewImage = useMemo(() => {
    // URL.createObjectURL(file) để tạo 1 URL cho ảnh đc tải lên và có thể show nó ra để preview
    return file ? URL.createObjectURL(file) : "";
  }, [file]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    description: "",
    price: "",
    avatar: "",
  });

  console.log(formData);

  const handleOpenInputFile = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    inputRef.current?.click();
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileFromLocal = e.target.files?.[0];
    if (fileFromLocal) {
      setFile(fileFromLocal);
      setFormData((prev) => {
        const newFormData = {
          ...prev,
          image: fileFromLocal,
        };
        return newFormData;
      });
    }
  };
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value, name } = e.target;
    setFormData((prev) => {
      const newFormData = {
        ...prev,
        [name]: value,
      };
      return newFormData;
    });
  };

  return (
    <div className="container my-10">
      <h1 className="text-3xl font-semibold">Form Control</h1>
      <button
        className="border border-red-600 w-[300px] float-right h-[40px] flex items-center justify-center"
        onClick={handleOpenInputFile}
      >
        connect Wallet
      </button>
      <form>
        <div className="flex mt-8 gap-4">
          <div className="flex-grow">
            <input
              placeholder="name"
              onChange={onChangeInput}
              name="name"
              value={formData.name}
              className="border border-black block w-full py-2 px-4"
            />
            <input
              placeholder="description"
              onChange={onChangeInput}
              name="description"
              value={formData.description}
              className="border border-black block w-full py-2 px-4 mt-4"
            />
            <input
              placeholder="price"
              onChange={onChangeInput}
              name="price"
              value={formData.price}
              className="border border-black block w-full py-2 px-4 mt-4"
            />
          </div>
          <div className="w-[30%] flex flex-col items-center justify-center">
            <div className="my-5 h-24 w-24">
              <img
                src={
                  previewImage ||
                  "https://blog.alliedmarketresearch.com/images/user_icon.png"
                }
                alt=""
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <input
              type="file"
              ref={inputRef}
              className="hidden"
              name="image"
              onChange={onFileChange}
            />
            <button
              className="border border-red-600 w-[100px] h-[40px] flex items-center justify-center"
              onClick={handleOpenInputFile}
            >
              chọn ảnh
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="border border-red-600 w-[100px] h-[40px] flex items-center justify-center mt-8"
        >
          lưu
        </button>
      </form>
      <div className="mt-8 p-4 border border-black">
        <div className="flex w-full ">
          <div>
            <img
              src="https://images.unsplash.com/photo-1699116548131-09a8a8a5ee4e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="product"
              className="w-[100px] h-[100px] object-cover"
            />
          </div>
          <div className="ml-6 w-full  flex items-center justify-between ">
            <div>
              <h3 className="text-xl">Sản phẩm 1</h3>
              <div>descrip...</div>
              <div>price</div>
            </div>
            <button className="border border-red-600 w-[100px] h-[40px] flex items-center justify-center">
              Mua
            </button>
          </div>
        </div>
        <div className="flex mt-4">
          <div>
            <img
              src="https://images.unsplash.com/photo-1699116548131-09a8a8a5ee4e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="product"
              className="w-[100px] h-[100px] object-cover"
            />
          </div>
          <div className="ml-6 w-full  flex items-center justify-between ">
            <div>
              <h3 className="text-xl">Sản phẩm 1</h3>
              <div>descrip...</div>
              <div>price</div>
            </div>
            <button className="border border-red-600 w-[100px] h-[40px] flex items-center justify-center">
              Mua
            </button>
          </div>
        </div>
        <div className="flex mt-4">
          <div>
            <img
              src="https://images.unsplash.com/photo-1699116548131-09a8a8a5ee4e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="product"
              className="w-[100px] h-[100px] object-cover"
            />
          </div>
          <div className="ml-6 w-full  flex items-center justify-between ">
            <div>
              <h3 className="text-xl">Sản phẩm 1</h3>
              <div>descrip...</div>
              <div>price</div>
            </div>
            <button className="border border-red-600 w-[100px] h-[40px] flex items-center justify-center">
              Mua
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
