import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
const CheckOutTerms = () => {
  return (
    <>
      <h2 className="font-bold text-lg leading-6 lg:pt-6 pt-7">
        Terms & Conditions
      </h2>

      <section className="flex items-start space-x-2 pt-4">
        <Checkbox id="1323" />
        <label
          htmlFor="1323"
          className="text-base font-normal leading-6 px-0.5"
        >
          *I agree to the account terms and conditions listed below and to have
          the{" "}
          <Link href="/" className="underline underline-offset-2">
            Terms & Conditions
          </Link>{" "}
          and the{" "}
          <Link href="/" className="underline underline-offset-2">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="/" className="underline underline-offset-2">
            Credit Report & Electronic Communications Authorization
          </Link>{" "}
          presented electronically. Checking this box will serve as your web
          signature.
        </label>
      </section>
    </>
  );
};

export default CheckOutTerms;
