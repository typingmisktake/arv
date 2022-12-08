const Product = (props) => {
  const product = props.product;

  const gross = product.price * product.quantity;
  const discount = (gross * 0.05).toFixed(2);
  const total = (gross - discount).toFixed(2);

  return (
    <div className="p-3 transition-all bg-white rounded-lg shadow-lg cursor-pointer duration-400 hover:shadow-2xl hover:scale-105">
      <div className="mb-5">
        <h1 className="text-3xl line-clamp-1">{product.name}</h1>
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <div className="flex justify-between">
            <p>Price</p>
            <h3 className="text-xl">&#8377;{product.price}</h3>
          </div>
          <div className="flex justify-between">
            <p>Quantity</p>
            <h4 className="text-xl">{product.quantity}</h4>
          </div>
        </div>
        <hr />
        <div className="">
          <div className="flex justify-between">
            <p>Gross</p>
            <h4 className="text-2xl">&#8377;{gross}</h4>
          </div>
          <div className="flex justify-between">
            <p>Discount</p>
            <h4 className="text-xl opacity-75">- &#8377;{discount}</h4>
          </div>
        </div>
        <h2 className="py-2 text-3xl text-center text-white transition-colors rounded shadow cursor-pointer duration-400 bg-slate-800 hover:bg-sky-500">
          &#8377;{total}
        </h2>
      </div>
    </div>
  );
};

export default Product;
