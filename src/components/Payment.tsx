import StepsDesktop from "../components/icons/stepsDesktop";
// import InputField from "./InputField";
// import LockIcon from "../components/icons/lockIcon";
// import HelpIcon from "../components/icons/helpIcon";
// import { RadioGroupDemo } from "./RadioButton";
// import { Checkbox } from "@/components/ui/checkbox";
import { AccordionContainer } from "./AccordianContainer";
import { Button } from "@/components/ui/button";
// import Link from "next/link";
import PaymentMethod from "./PaymentMethod";
import CreditManagedContentArea from "./CreditManagedContentArea";
import CheckoutInputFields from "./CheckoutInputFields";
import CheckOutTerms from "./CheckOutTerms";
import BillingAddress from "./BillingAddress";
import CheckOutCreateAccount from "./CheckOutCreateAccount";

const Payment = () => {
  return (
    <form action="">
      <section className="lg:pt-6 pt-[22px] pb-6 lg:border lg:shadow-[#B6B6B8] lg:border-[#B6B6B8] lg:mt-6 lg:rounded-md lg:shadow-md border-t border-b">
        <header className="flex items-center align-middle gap-x-[15px] lg:border-b border-[#B6B6B8] lg:pb-[21px]  lg:px-[26px] px-[15px] ">
          <StepsDesktop />
          <h1 className="font-bold text-[22px] leading-[28.6px]">Payment</h1>
        </header>
        <section className="lg:pt-[25px] pt-[29px] lg:px-[26px] px-[15px] ">
          <PaymentMethod />
        </section>
        <section className=" lg:mt-[24px] mt-[31px] lg:px-[26px] px-[15px] ">
          <CreditManagedContentArea />
        </section>
        <section className="pt-[31px] lg:px-[26px] px-[15px] ">
          <CheckoutInputFields />
        </section>
        <section className="pt-[16px] lg:px-[26px] px-[15px] ">
          <CheckOutTerms />
        </section>
        <section className="pt-[36px] pb-[35px] border-b-[1px] border-[#B6B6B8] lg:px-[26px] px-[15px] ">
          <AccordionContainer />
        </section>
        <section className="pt-[25px] border-b-[1px] border-[#B6B6B8] lg:px-[26px] px-[15px] ">
          <BillingAddress />
        </section>
        <section className="pt-[25px] lg:px-[26px] px-[15px]">
          <CheckOutCreateAccount />
        </section>
      </section>
      <section className="grid lg:grid-cols-2 grid-cols-1 lg:pt-[25px] pt-[25px] pl-[14px] lg:pl-0 pr-[16px] lg:pr-[0] pb-[25px]">
        <Button
          variant="destructive"
          className="lg:py-[13.5px] py-[15.5px] font-bold lg:text-[18px] lg:leading-[23.4px] text-[22px] leading-[28.6px] bg-[#002C4E] hover:bg-[#002C4E]"
        >
          Continue to Review
        </Button>
      </section>
    </form>
  );
};

export default Payment;
