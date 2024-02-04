import InputField from "./InputField";
import LockIcon from "../components/icons/lockIcon";
import HelpIcon from "../components/icons/helpIcon";

const CheckoutInputFields = () => {
  return (
    <section className="grid grid-rows-3 gap-y-6">
      <section className="lg:grid grid-cols-2">
        <InputField
          items="*Date of Birth (MM/DD/YYYY)"
          id={"2"}
          htmlFor={"2"}
        />
      </section>
      <section className="lg:grid lg:grid-cols-2 flex flex-rows items-center gap-3">
        <section className="grid grid-cols-2">
          <p className="flex items-center justify-center text-base leading-6 tracking-[5px]">
            XXX - XX -
          </p>
          <InputField items="*Last 4 of SSN" id={"1"} htmlFor={"1"} />
        </section>
        <section className="flex items-center">
          <LockIcon className="h-[24px] w-[24px]" />
        </section>
      </section>
      <section className="lg:grid lg:grid-cols-2 flex flex-rows items-center gap-3">
        <section className="grow">
          <InputField items="Catalog ID (optional)" id={"3"} htmlFor={"3"} />
        </section>
        <section className="flex-none items-center">
          <HelpIcon className="h-6 w-6" />
        </section>
      </section>
    </section>
  );
};
export default CheckoutInputFields;
