import StepsDesktop from "../components/icons/stepsDesktop";
import { AccordionContainer } from "./AccordianContainer";
import { Button } from "@/components/ui/button";
import PaymentMethod from "./PaymentMethod";
import CreditManagedContentArea from "./CreditManagedContentArea";
import CheckoutInputFields from "./CheckoutInputFields";
import SignInPaymentBillingAddress from "./SignInPaymentBillingAddress";
import CheckOutTerms from "./CheckOutTerms";
import BillingAddress from "./BillingAddress";
import CheckOutCreateAccount from "./CheckOutCreateAccount";
import InputField from "./InputField";
import HelpIcon from "../components/icons/helpIcon";
const SignInPayment = () => {
  return (
    <form action="">
      <section className="lg:pt-6 pt-22 pb-6 lg:border lg:shadow-[#B6B6B8] lg:border-[#B6B6B8] lg:mt-6 lg:rounded-md lg:shadow-md border-t border-b">
        <header className="flex items-center align-middle gap-x-4 lg:border-b border-[#B6B6B8] lg:pb-5 lg:px-26 px-4 ">
          <StepsDesktop />
          <h1 className="font-bold text-[22px] leading-7">Payment</h1>
        </header>
        <section className="lg:pt-6 pt-7 lg:px-26 px-4 ">
          <PaymentMethod />
        </section>
        <section className=" lg:mt-6 mt-8 lg:px-26 px-4 ">
          <CreditManagedContentArea />
        </section>
        <section className="mt-5 lg:px-26 px-4">
          <strong className="text-lg font-bold leading-6">
            Account Number
          </strong>
          <p className="text-sm font-normal leading-6 pt-2">123456789</p>
        </section>
        <section className="mt-5 lg:px-26 px-4">
          <section className="lg:grid lg:grid-cols-2 flex flex-rows items-center gap-3">
            <section className="lg:w-full w-[70%]">
              <InputField
                items="Catalog ID (optional)"
                id={"3"}
                htmlFor={"3"}
              />
            </section>
            <section className="flex-none items-center">
              <HelpIcon className="h-6 w-6" />
            </section>
          </section>
        </section>

        <section className="pt-22 pb-9 border-b border-[#B6B6B8] lg:px-26 px-4 ">
          <AccordionContainer />
        </section>
        <SignInPaymentBillingAddress />
      </section>
      <section className="grid lg:grid-cols-2 grid-cols-1 pt-6 pl-[14px] lg:pl-0 pr-4 lg:pr-[0] pb-6">
        <Button
          variant="destructive"
          type="submit"
          className="lg:py-[13.5px] py-[15.5px] font-bold lg:text-sm lg:leading-[23.4px] text-[22px] leading-7 bg-[#002C4E] hover:bg-[#002C4E]"
        >
          Continue to Review
        </Button>
      </section>
    </form>
  );
};
export default SignInPayment;
