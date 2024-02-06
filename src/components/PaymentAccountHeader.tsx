import Link from "next/link";
import HomeIcon from "./icons/homeIcon";
const PaymentAccountHeader = () => {
  return (
    <section className="lg:flex items-center justify-between py-6 mx-4 lg:mx-0">
      <section className="flex items-center gap-x-4">
        <HomeIcon className="w-6 h-7" />
        <h1 className="font-bold text-2xl leading-8">Addresses</h1>
      </section>
      <section>
        <Link
          href="/"
          className="pl-11 lg:pl-0 text-base underline underline-offset-2 leading-5 font-normal"
        >
          Add New Address
        </Link>
      </section>
    </section>
  );
};

export default PaymentAccountHeader;
