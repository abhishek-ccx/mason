import Link from "next/link";
import LockIcon from "../components/icons/lockIcon";
import ShoppingCartIcon from "../components/icons/shoppingCartIcon";
const Secure = () => {
  return (
    <header className="lg:flex justify-between items-center">
      <section className="flex gap-x-2 justify-center lg:items-center lg:py-[41px] pt-[30px]">
        <Link className="text-left h-[28px] w-[21.33px]" href="/">
          <LockIcon className="h-full w-full" />
        </Link>
        <Link
          className="font-bold text-[25px] leading-[32.5px] lg:mt-1"
          href="/"
        >
          Secure Checkout
        </Link>
      </section>
      <section className="flex gap-x-2 justify-center items-center lg:py-[41px] pt-[21.5px] pb-[35.5px]">
        <Link className="h-[24px] w-[24px]" href="/">
          <ShoppingCartIcon className="h-full w-full" />
        </Link>
        <Link
          className="font-normal text-[16px] leading-[19.2px] underline"
          href="/"
        >
          Return to Cart
        </Link>
      </section>
    </header>
  );
};

export default Secure;
