import { RadioGroupDemo } from "./RadioButton";
const PaymentMethod = () => {
  return (
    <>
      <article>
        <p className="font-bold text-[18px] leading-[23.4px]">Payment Method</p>
        <p className="font-normal text-[12px] leading-4 pt-0.5">
          *Required fields
        </p>
      </article>
      <section className="pt-[30px]">
        <RadioGroupDemo />
      </section>
    </>
  );
};

export default PaymentMethod;
