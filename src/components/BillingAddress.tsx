import { Checkbox } from "@/components/ui/checkbox";
const BillingAddress = () => {
  return (
    <section>
      <h2 className="font-bold text-[18px] leading-[23.4px]">
        Billing Address
      </h2>
      <section className="flex items-center space-x-2 pt-[17px]">
        <Checkbox id="100" />
        <label
          htmlFor="100"
          className="text-[16px] font-normal leading-[24.64px] px-[3px]"
        >
          Same as Shipping Address
        </label>
      </section>
      <section className="lg:grid lg:grid-cols-2 pt-[15px] pr-[123px] lg:pr-0">
        <section className="pl-[31px] pb-[35px]">
          <p className="font-normal text-[17px] pr-[12px] text-ellipsis overflow-hidden leading-[25.5px]">
            Shannon Henneman 1303 Brookline Ave Eau Claire, WI 54703-1925
          </p>
          <p className="pt-[8px] font-normal text-[17px] leading-[25.5px]">
            (715) 555-5555
          </p>
        </section>
      </section>
    </section>
  );
};
export default BillingAddress;
