import Secure from "./Secure";
import Shipping from "./Shipping";
import Payment from "./Payment";

const Checkout2 = () => {
  return (
    <section>
      <section className="lg:grid grid-cols-2 max-width-[1440px]">
        <section className="h-full lg:ml-[72px] lg:mr-1">
          <Secure />
          <Shipping />
          <Payment />
        </section>
        <section className="h-full"></section>
      </section>
    </section>
  );
};

export default Checkout2;
