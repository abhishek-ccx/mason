import Link from "next/link";
import CheckCirle from "./icons/checkCircle";

interface ShippingProps {
  color: string;
  edit: boolean;
  logo: boolean;
}

const Shipping: React.FC<ShippingProps> = ({ edit, color }) => {
  return (
    <section className="lg:pl-[26px] lg:pr-[26px] pl-[15px] pr-[19px] lg:border lg:shadow-[#B6B6B8] border-[#B6B6B8] lg:rounded-md lg:shadow-md border-t-[1px]">
      <section className="flex items-start lg:gap-x-[12px] gap-x-[12px]">
        <section className="lg:pt-[24px] pt-[25px]">
          <CheckCirle className={`w-[36px] h-[36px] fill-[${color}]`} />
        </section>
        <article className="mr-auto">
          <h1 className="font-bold text-[22px] leading-[28.6px] text-[#298842] pt-[27px]">
            Shipping
          </h1>
        </article>
        {edit ? (
          <Link
            className="font-normal text-[16px] leading-[19.2px] underline pt-[32px]"
            href="#"
          >
            Edit
          </Link>
        ) : null}
      </section>
      <section className="grid lg:grid-cols-2 pt-[25px]">
        <section className="pl-[49px] pb-[33px] lg:pb-[35px]">
          <strong className="font-bold text-[18px] leading-[23.4px] pt-[28px]">
            Shipping Address
          </strong>
          <p className="font-normal text-[17px] pt-[10px] lg:pr-[12px] pr-[95px] text-ellipsis overflow-hidden">
            Shannon Henneman 1303 Brookline Ave Eau Claire, WI 54703-1925
          </p>
          <p className="pt-[8px] font-normal text-[17px]">(715) 555-5555</p>
        </section>
        <article className="pl-[45px]">
          <strong className="font-bold text-[18px] leading-[23.4px] lg:pt-[28px]  pt-[33px]">
            Shipping Method
          </strong>
          <p className="font-normal text-[17px] pt-[10px] lg:pr-[12px] pr-[24px] lg:pb-0 pb-[35px] text-ellipsis overflow-hidden">
            Arrives by <strong>Wed, Dec 06 </strong>Standard Shipping
          </p>
        </article>
      </section>
    </section>
  );
};

export default Shipping;
