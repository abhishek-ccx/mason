import Link from "next/link";
import SuccessIcon from "./icons/checkCircle";

interface ShippingProps {
  color: string;
  edit: boolean;
}

const Shipping: React.FC<ShippingProps> = ({ edit, color }) => {
  return (
    <section className="pl-4 pr-4 lg:border lg:shadow-[#B6B6B8] border-[#B6B6B8] lg:rounded-md lg:shadow-md border-t">
      <section className="flex items-start lg:gap-x-[12px] gap-x-[12px]">
        <section className="lg:pt-6 pt-6">
          <SuccessIcon className={`w-9 h-9 fill-[${color}]`} />
        </section>
        <article className="mr-auto">
          <h1 className="font-bold text-[22px] leading-7 text-[#298842] pt-7">
            Shipping
          </h1>
        </article>
        {edit ? (
          <Link
            className="font-normal text-base leading-5 underline pt-8"
            href="#"
          >
            Edit
          </Link>
        ) : null}
      </section>
      <section className="grid lg:grid-cols-2 pt-6">
        <section className="pl-12 pb-8 lg:pb-9">
          <strong className="font-bold text-[18px] leading-6 pt-7">
            Shipping Address
          </strong>
          <p className="font-normal text-base pt-2.5 lg:pr-3 pr-24 text-ellipsis overflow-hidden">
            Shannon Henneman 1303 Brookline Ave Eau Claire, WI 54703-1925
          </p>
          <p className="pt-2 font-normal text-base">(715) 555-5555</p>
        </section>
        <article className="pl-11">
          <strong className="font-bold text-[18px] leading-6 lg:pt-7  pt-8">
            Shipping Method
          </strong>
          <p className="font-normal text-base pt-2.5 lg:pr-3 pr-6 lg:pb-0 pb-9 text-ellipsis overflow-hidden">
            Arrives by <strong>Wed, Dec 06 </strong>Standard Shipping
          </p>
        </article>
      </section>
    </section>
  );
};

export default Shipping;
