import Link from "next/link";
const SignInPaymentBillingAddress = () => {
  return (
    <>
      <section>
        <section className="grid lg:grid-cols-2 pt-6">
          <section className="pl-12 pb-8 lg:pb-0">
            <strong className="font-bold text-[18px] leading-6 pt-7">
              Billing Address
            </strong>
            <p className="font-normal text-6 pt-2.5 lg:pr-3 pr-14 text-ellipsis overflow-hidden">
              Shannon Henneman 1303 Brookline Ave Eau Claire, WI 54703-1925
            </p>
            <p className="pt-2 font-normal text-4">(715) 555-5555</p>
            <section className="pt-2">
              <Link
                className="font-normal text-4 underline underline-offset-2"
                href={"#"}
              >
                Edit Address
              </Link>
            </section>
          </section>
          <section className="pl-11">
            <strong className="font-bold text-[18px] leading-6 lg:pt-7 pt-8">
              Contact Info
            </strong>
            <p className="font-normal text-[17px] pt-2.5 lg:pr-3 pr-6 text-ellipsis overflow-hidden">
              test@gmail.com
            </p>
          </section>
        </section>
      </section>
    </>
  );
};

export default SignInPaymentBillingAddress;
