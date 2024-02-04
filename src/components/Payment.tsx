import StepsDesktop from "../components/icons/stepsDesktop";
import { AccordionContainer } from "./AccordianContainer";
import { Button } from "@/components/ui/button";
import PaymentMethod from "./PaymentMethod";
import CreditManagedContentArea from "./CreditManagedContentArea";
import CheckoutInputFields from "./CheckoutInputFields";
import CheckOutTerms from "./CheckOutTerms";
import BillingAddress from "./BillingAddress";
import CheckOutCreateAccount from "./CheckOutCreateAccount";

const Payment = () => {
  return (
    <form action="">
      <section className="lg:pt-6 pt-22 pb-6 lg:border lg:shadow-[#B6B6B8] lg:border-[#B6B6B8] lg:mt-6 lg:rounded-md lg:shadow-md border-t border-b">
        <header className="flex items-center align-middle gap-x-4 lg:border-b border-[#B6B6B8] lg:pb-5  lg:px-26 px-4 ">
          <StepsDesktop />
          <h1 className="font-bold text-[22px] leading-7">Payment</h1>
        </header>
        <section className="lg:pt-6 pt-7 lg:px-26 px-4 ">
          <PaymentMethod />
        </section>
        <section className="lg:mt-6 mt-8 lg:px-26 px-4 ">
          <CreditManagedContentArea />
        </section>
        <section className="pt-8 lg:px-26 px-4 ">
          <CheckoutInputFields />
        </section>
        <section className="pt-4 lg:px-26 px-4 ">
          <CheckOutTerms />
        </section>
        <section className="pt-9 pb-9 border-b border-[#B6B6B8] lg:px-26 px-4 ">
          <AccordionContainer />
        </section>
        <section className="pt-6 border-b border-[#B6B6B8] lg:px-26 px-4 ">
          <BillingAddress />
        </section>
        <section className="pt-6 lg:px-26 px-4">
          <CheckOutCreateAccount />
        </section>
      </section>
      <section className="grid lg:grid-cols-2 grid-cols-1 pt-6 pl-3.5 lg:pl-0 pr-4 lg:pr-0 pb-6">
        <Button
          variant="destructive"
          type="submit"
          className="lg:py-3 py-4 font-bold lg:text-lg lg:leading-6 text-[22px] leading-7 bg-[#002C4E] hover:bg-[#002C4E]"
        >
          Continue to Review
        </Button>
      </section>
    </form>
  );
};

export default Payment;
