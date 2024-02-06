interface InputFieldProps {
  items: string;
  id: string;
  htmlFor: string;
}

const InputField: React.FC<InputFieldProps> = ({ items, id, htmlFor }) => {
  return (
    <section className="relative">
      <input
        type="text"
        id={id}
        className="block p-4 w-full text-4 text-black bg-transparent rounded-lg border border-[#B6B6B8] appearance-none dark:text-white peer"
        placeholder=""
      />
      <label
        htmlFor={htmlFor}
        className="absolute text-sm text-[#000] duration-300 transform text-[14px] -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {/* *Date of Birth (MM/DD/YYYY) */}
        {items}
      </label>
    </section>
  );
};

export default InputField;
