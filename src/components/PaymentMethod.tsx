import { RadioGroupDemo } from "./RadioButton";
const PaymentMethod = () => {
  return (
    <>
      <section>
        <p className="font-bold text-[18px] leading-6">Payment Method</p>
        <p className="font-normal text-xs leading-4 pt-0.5">*Required fields</p>
      </section>
      <section className="pt-30">
        <RadioGroupDemo />
      </section>
    </>
  );
};

export default PaymentMethod;
