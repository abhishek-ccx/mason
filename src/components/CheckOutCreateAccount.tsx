import { Checkbox } from "@/components/ui/checkbox";
import InputField from "./InputField";
import HelpIcon from "../components/icons/helpIcon";
import Link from "next/link";

const CheckOutCreateAccount = () => {
  return (
    <>
      <h2 className="font-bold text-[18px] leading-6">Create Account</h2>
      <p className="pt-2 font-normal text-base">
        To use Stoneberry Credit, you must create a new account here or sign in
        to an existing account.
      </p>
      <section className="pt-[30px]">
        <section className="lg:grid grid-cols-3 gap-x-3">
          <section className="col-span-2">
            <InputField items="*Email Address" id={"21"} htmlFor={"21"} />
          </section>
        </section>
        <section className="lg:grid lg:grid-cols-3 gap-x-3 pt-5 flex flex-rows items-center">
          <section className="col-span-2 relative grow">
            <InputField items="Password" id={"31"} htmlFor={"31"} />
            <section className="absolute top-[30%] right-0 pr-4 text-sm underline">
              <Link href="#">Show</Link>
            </section>
          </section>
          <section className="flex-none items-center">
            <HelpIcon className="h-6 w-6" />
          </section>
        </section>
      </section>
      <section className="flex items-start space-x-2 pt-6">
        <Checkbox id="10000" />
        <label
          htmlFor="10000"
          className="text-base font-normal leading-6 px-[3px]"
        >
          Yes, please send me email updates about new products and exclusive
          promotions!
        </label>
      </section>
      <p className="pt-6 font-normal text-base">
        To continue checkout as a guest, select Credit/Debit Card as your
        payment method above.
      </p>
    </>
  );
};

export default CheckOutCreateAccount;
