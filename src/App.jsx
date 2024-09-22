import { Button } from "@material-tailwind/react";
import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import Header from "./Component/Header";

const App = () => {
  const [products, setProducts] = useState([
    { id: 0, name: "shipcy", price: 100, items: 10 },
    { id: 1, name: "pepsi", price: 200, items: 20 },
    { id: 2, name: "cigaretes", price: 300, items: 30 },
    { id: 3, name: "kranshy", price: 400, items: 40 },
    { id: 4, name: "molto", price: 500, items: 50 },
    // { id: 4, name: "hohos", price: 600, items: 10 },
  ]);

  const [copyProducts, setCopyProducts] = useState([
    { id: 0, name: "shipcy", price: 100, items: 10 },
    { id: 1, name: "pepsi", price: 200, items: 20 },
    { id: 2, name: "cigaretes", price: 300, items: 30 },
    { id: 3, name: "kranshy", price: 400, items: 40 },
    { id: 4, name: "molto", price: 500, items: 50 },
  ]);

  const [darkLight, setDarkLight] = useState(false);
  // console.log(products);

  const incress = (p) => {
    // console.log(p);
    const newProducts = products.map((product) => {
      if (p.id == product.id) {
        product.items++;
      }
      return product;
    });
    setProducts(newProducts);
  };
  const decress = (p) => {
    // console.log(p);
    const newProducts = products.map((product) => {
      if (p.id == product.id) {
        if (product.items > 1) {
          product.items--;
        }
      }
      return product;
    });
    setProducts(newProducts);
  };
  const dell = (p) => {
    // console.log(p);
    const newProducts = products.filter((product) => {
      if (p.id !== product.id) {
        return product;
      }
    });
    setProducts(newProducts);
  };

  const restItems = (x) => {
    const newProducts = products.map((p) => {
      p.items = 1;
      return p;
    });
    setProducts(newProducts);
  };

  const add = (p) => {
    const check = products.some((prod) => {
      return prod.id == p.id;
    });
    if (check) {
      // console.log("yes");
      const newProducts = products.map((product) => {
        if (p.id == product.id) {
          product.items++;
        }
        return product;
      });
      setProducts(newProducts);
    } else {
      setProducts([...products, p]);
    }
  };

  function setDarkTheme() {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
    setDarkLight(!darkLight);
  }

  function setLightTheme() {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
    setDarkLight(!darkLight);
  }

  return (
    <div className="w-full ">
      <Header
        copyProducts={copyProducts}
        products={products}
        setProducts={setProducts}
      />
      <div className="  bg-gray-100 dark:bg-black">
        <div className="  flex justify-center lg:justify-evenly items-center py-5">
          {products &&
            products.map(
              (p, i) =>
                i == 0 && (
                  <Button
                    className="me-2 lg:me-0"
                    color="blue-gray"
                    key={i}
                    onClick={() => restItems(p)}
                  >
                    Rest
                  </Button>
                )
            )}
          {darkLight ? (
            <Button onClick={setLightTheme}>{<FaSun />}</Button>
          ) : (
            <Button onClick={setDarkTheme}>{<FaMoon />}</Button>
          )}
        </div>
        <table className=" container mx-auto rounded-xl  bg-gray-300 dark:bg-blue-gray-900">
          <tbody className=" flex flex-col justify-center items-center  gap-y-16 my-6 ">
            {products &&
              products.map((prod, i) => (
                <tr
                  key={i}
                  className="text-black dark:text-white  font-bold text-xl w-full flex flex-col gap-y-5 md:gap-y-0 md:flex-row justify-evenly items-center "
                >
                  <th>
                    Name:{" "}
                    <span className="text-blue-gray-700 dark:text-black  underline decoration-red-500">
                      {prod?.name}
                    </span>
                  </th>
                  <th>
                    Price:{" "}
                    <span className="text-blue-gray-700 dark:text-black  underline decoration-red-500">
                      {prod?.price}
                    </span>
                  </th>
                  <th>
                    Items:{" "}
                    <span className="text-blue-gray-700 dark:text-black  underline decoration-red-500">
                      {prod?.items}
                    </span>
                  </th>
                  <th className="flex gap-x-4 flex-col lg:flex-row gap-y-2 md:gap-y-0">
                    <Button color="yellow" onClick={() => incress(prod)}>
                      Increment
                    </Button>
                    <Button color="blue" onClick={() => decress(prod)}>
                      Decrement
                    </Button>
                    <Button color="red" onClick={() => dell(prod)}>
                      Delete
                    </Button>
                    <div className="w-full block lg:hidden">
                      <hr className=" w-[30vh]  " />
                    </div>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
        <div className=" text-black pb-[1.3rem] pt-1 bg-gray-100 dark:bg-black  dark:text-white w-full flex justify-center items-center text-3xl font-bold">
          Total Amount :{" "}
          <span className="text-blue-gray-800 dark:text-blue-gray-500 font-medium">
            {products.length >= 1
              ? products.map((e) => e.price * e.items).reduce((x, y) => x + y)
              : "0"}{" "}
            EGP
          </span>
        </div>
      </div>
    </div>
  );
};

export default App;
