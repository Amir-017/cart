import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
const Header = ({ copyProducts, products, setProducts }) => {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

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

  return (
    <Navbar className="mx-auto max-w-screen-4xl px-4 py-2 lg:px-8 lg:py-4 dark:bg-blue-gray-900 bg-gray-300">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <div className="flex w-full justify-between">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium"
          >
            <h1 className="text-3xl font-bold dark:text-white text-black text-center ms-4 ">
              Amir's Cart
            </h1>
          </Typography>
          <div className="hidden lg:block">
            <div className={``}>
              <div className="w-[70%] flex justify-center lg:gap-x-5 items-center">
                {copyProducts &&
                  copyProducts.map((product, i) => (
                    <div className="" key={i}>
                      <Button color="green" onClick={() => add(product)}>
                        {product ? product.name : ""}
                      </Button>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <IconButton
          variant="text"
          className="dark:text-white text-black  ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          <div className={``}>
            <div className="w-[70%] flex flex-col justify-center lg:gap-x-5 items-start gap-y-2">
              {copyProducts &&
                copyProducts.map((product, i) => (
                  <div className="" key={i}>
                    <Button color="green" onClick={() => add(product)}>
                      {product ? product.name : ""}
                    </Button>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default Header;
