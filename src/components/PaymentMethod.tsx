import { RadioGroupDemo } from "./RadioButton";
const PaymentMethod = () => {
  return (
    <>
      <article>
        <p className="font-bold text-[18px] leading-[23.4px]">Payment Method</p>
        <p className="font-normal text-[12px] leading-[16.8px] pt-[2px]">
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
