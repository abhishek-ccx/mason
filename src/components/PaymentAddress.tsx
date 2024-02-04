import PaymentAddressCard from "./PaymentAddressCard";

const PaymentAddress = () => {
  return (
    <section className="w-full lg:px-70">
      <section className="mx-auto lg:flex gap-x-6">
        <section className="w-full hidden lg:block mx-auto max-w-[305px] h-[100vh] bg-red-600 ">
          ISME SIDE NAV AAYEGA
        </section>
        <section className="w-full mx-auto">
          <PaymentAddressCard />
        </section>
      </section>
    </section>
  );
};

export default PaymentAddress;
