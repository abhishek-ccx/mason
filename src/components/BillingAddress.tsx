import { Checkbox } from "@/components/ui/checkbox";
const BillingAddress = () => {
  return (
    <section>
      <h2 className="font-bold text-[18px] leading-6">Billing Address</h2>
      <section className="flex items-center space-x-2 pt-4">
        <Checkbox id="100" />
        <label htmlFor="100" className="text-base font-normal leading-6 px-2">
          Same as Shipping Address
        </label>
      </section>
      <section className="lg:grid lg:grid-cols-2 pt-4 pr-[123px] lg:pr-0">
        <section className="pl-8 pb-9">
          <p className="font-normal text-base pr-3 text-ellipsis overflow-hidden leading-6">
            Shannon Henneman 1303 Brookline Ave Eau Claire, WI 54703-1925
          </p>
          <p className="pt-2 font-normal text-base leading-6">(715) 555-5555</p>
        </section>
      </section>
    </section>
  );
};
export default BillingAddress;
