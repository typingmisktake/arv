const FormField = ({ name, register, placeholder, error, type, dirty }) => {
  const border = () => {
    if (error) return "border-rose-500 border-l-[12px] focus:border-yellow-500";
    else if (dirty && !error) return "border-emerald-500 border-l-[12px]";
    else return "";
  };

  return (
    <div className="flex flex-col w-full items-start">
      <input
        id={name}
        name={name}
        type={type || "text"}
        placeholder={placeholder}
        {...register}
        className={`px-4 appearance-none py-2 text-black outline-none transition-all w-full ${border()}`}
      />
      {error && <div className="text-sm text-rose-500">{error.message}</div>}
    </div>
  );
};

export default FormField;
