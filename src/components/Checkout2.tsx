import Secure from "./Secure";
import ColorShipping from "./ColorShipping";
import Payment from "./Payment";

const Checkout2 = () => {
  return (
    <section>
      <section className="lg:grid grid-cols-2 max-width-[1440px]">
        <section className="h-full lg:ml-[72px] lg:mr-1">
          <Secure />
          <ColorShipping edit={false} color="#298842" />
          <Payment />
        </section>
        <section className="h-full"></section>
      </section>
    </section>
  );
};

export default Checkout2;
