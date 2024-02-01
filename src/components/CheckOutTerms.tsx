import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
const CheckOutTerms = () => {
  return (
    <>
      <h2 className="font-bold text-[18px] leading-[23.4px] lg:pt-[25px] pt-[29px]">
        Terms & Conditions
      </h2>

      <section className="flex items-start space-x-2 pt-[17px]">
        <Checkbox id="1323" />
        <label
          htmlFor="1323"
          className="text-[16px] font-normal leading-[24.8px] px-[3px]"
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
