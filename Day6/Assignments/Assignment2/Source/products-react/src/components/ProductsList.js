import Product from "./Product";
const ProductsList = () => {
  const products = [
    {
      name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      quantity: 4,
    },
    {
      name: "Mens Casual Premium Slim Fit T-Shirts ",
      price: 22.3,
      quantity: 4,
    },
    {
      name: "Mens Cotton Jacket",
      price: 55.99,

      quantity: 4,
    },
    {
      name: "Mens Casual Slim Fit",
      price: 15.99,
      quantity: 4,
    },
    {
      name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      quantity: 4,
    },
    {
      name: "Solid Gold Petite Micropave ",
      price: 168,
      quantity: 4,
    },
    {
      name: "White Gold Plated Princess",
      price: 9.99,
      quantity: 4,
    },
    {
      name: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 10.99,
      quantity: 4,
    },
    {
      name: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      price: 64,
      quantity: 4,
    },
    {
      name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
      price: 109,
      quantity: 4,
    },
  ];
  return (
    <div className="flex flex-wrap">
      {products.map((product) => {
        return (
          <div className="w-1/3 p-3">
            <Product product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
