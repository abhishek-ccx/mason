import { Checkbox } from "@/components/ui/checkbox";
const BillingAddress = () => {
  return (
    <section>
      <h2 className="font-bold text-[18px] leading-6">Billing Address</h2>
      <section className="flex items-center space-x-2 pt-4">
        <Checkbox id="100" />
        <label htmlFor="100" className="text-4 font-normal leading-6 px-[3px]">
          Same as Shipping Address
        </label>
      </section>
      <section className="lg:grid lg:grid-cols-2 pt-4 pr-[123px] lg:pr-0">
        <section className="pl-8 pb-9">
          <p className="font-normal text-4 pr-3 text-ellipsis overflow-hidden leading-6">
            Shannon Henneman 1303 Brookline Ave Eau Claire, WI 54703-1925
          </p>
          <p className="pt-2 font-normal text-4 leading-6">(715) 555-5555</p>
        </section>
      </section>
    </section>
  );
};
export default BillingAddress;
