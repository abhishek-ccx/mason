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
        className="block p-[16px] w-full text-[16px] text-black bg-transparent rounded-lg border border-[#B6B6B8] appearance-none dark:text-white peer"
        placeholder=""
      />
      <label
        htmlFor={htmlFor}
        className="absolute text-sm text-[##B6B6B8] duration-300 transform text-[14px] -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
      >
        {/* *Date of Birth (MM/DD/YYYY) */}
        {items}
      </label>
    </section>
    // <section className="relative">
    //   <input
    //     type="text"
    //     id={id}
    //     className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
    //     placeholder=" "
    //   />
    //   <label
    //     htmlFor={id}
    //     className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
    //   >
    //     Floating outlined
    //   </label>
    // </section>
  );
};

export default InputField;