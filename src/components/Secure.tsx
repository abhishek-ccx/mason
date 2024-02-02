import Link from "next/link";
import LockIcon from "../components/icons/lockIcon";
import ShoppingCartIcon from "../components/icons/shoppingCartIcon";
const Secure = () => {
  return (
    <header className="lg:flex justify-between items-center">
      <section className="flex gap-x-2 justify-center lg:items-center lg:py-10 pt-8">
        <Link className="text-left h-7 w-5" href="/">
          <LockIcon className="h-full w-full" />
        </Link>
        <Link className="font-bold text-2xl leading-8 lg:mt-1" href="/">
          Secure Checkout
        </Link>
      </section>
      <section className="flex gap-x-2 justify-center items-center lg:py-10 pt-5 pb-9">
        <Link className="h-6 w-6" href="/">
          <ShoppingCartIcon className="h-full w-full" />
        </Link>
        <Link className="font-normal text-base leading-5 underline" href="/">
          Return to Cart
        </Link>
      </section>
    </header>
  );
};

export default Secure;
