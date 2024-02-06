const address = [
  {
    name: "Shannon Henneman",
    address: "1303 Brookline Ave Eau Claire, WI 54703-1925",
    phoneNumber: "(715) 555-5555",
    isDefault: true,
  },
  {
    name: "John Doe",
    address: "123 Main Street, Anytown, USA",
    phoneNumber: "(555) 123-4567",
    isDefault: false,
  },
  {
    name: "Jane Smith",
    address: "456 Elm Street, Somewhere, USA",
    phoneNumber: "(555) 987-6543",
    isDefault: false,
  },
  {
    name: "Alice Johnson",
    address: "789 Oak Avenue, Anywhere, USA",
    phoneNumber: "(555) 456-7890",
    isDefault: false,
  },
];

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PaymentCard from "./PaymentCard";
import InputField from "./InputField";
import HelpIcon from "../components/icons/helpIcon";
import AddCircle from "../components/icons/addCircle";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "./ui/button";
const PaymentAddressCard = () => {
  return (
    <>
      <section className="lg:grid grid-cols-2 gap-3 ">
        {address.map((item, key) => {
          return (
            <PaymentCard
              key={key}
              name={item.name}
              address={item.address}
              phoneNumber={item.phoneNumber}
              isDefault={item.isDefault}
            />
          );
        })}
      </section>
      <section className="lg:grid grid-cols-2 gap-3 mt-6 mx-4 lg:mx-0">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem
            value="item-1"
            className=" border shadow-sm border-[#B6B6B8] rounded-md"
          >
            <AccordionTrigger className="px-8 py-4 font-semibold leading-6 text-base">
              Add New Address
            </AccordionTrigger>
            <AccordionContent>
              <p className="font-normal text-xs leading-4 px-8">
                *Required fields
              </p>
              <form action="">
                <section className="flex w-full items-center px-5 pt-10">
                  <section className="lg:w-11/12 w-full">
                    <InputField items="*First Name" id={"81"} htmlFor={"81"} />
                  </section>
                </section>
                <section className="flex w-full items-center px-5 pt-6">
                  <section className="lg:w-11/12 w-full">
                    <InputField items="*Last Name" id={"82"} htmlFor={"82"} />
                  </section>
                </section>
                <section className="flex w-full items-center gap-x-2 px-5 pt-6">
                  <section className="w-11/12">
                    <InputField
                      items="*Address Line 1"
                      id={"83"}
                      htmlFor={"83"}
                    />
                  </section>
                  <HelpIcon className="h-6 w-6" />
                </section>
                <section className="flex gap-x-2 items-center px-5 pt-6">
                  <AddCircle className="h-5 w-5" />
                  <p className="text-base leading-5 font-normal">
                    Address Line 2
                  </p>
                  <p className="text-sm leading-5 font-normal">(optional)</p>
                </section>
                <section className="flex w-full items-center px-5 pt-6">
                  <section className="lg:w-11/12 w-full">
                    <InputField items="*City" id={"84"} htmlFor={"84"} />
                  </section>
                </section>
                <section className="flex lg:w-11/12 items-center px-5 pt-6 gap-x-4">
                  <section className="w-3/5">
                    <InputField items="*State" id={"85"} htmlFor={"85"} />
                  </section>
                  <section className="w-2/5">
                    <InputField items="*Zip Code" id={"86"} htmlFor={"86"} />
                  </section>
                </section>
                <section className="flex w-full items-center gap-x-2 px-5 pt-6">
                  <section className="w-11/12">
                    <InputField
                      items="*Phone Number"
                      id={"87"}
                      htmlFor={"87"}
                    />
                  </section>
                  <HelpIcon className="h-6 w-6" />
                </section>
                <section className="flex items-center space-x-2 pt-6 px-5">
                  <Checkbox id="default billing and shipping address w-4 h-4" />
                  <Label
                    htmlFor="terms"
                    className="text-base font-normal leading-6"
                  >
                    Set as default billing & shipping address
                  </Label>
                </section>
                <section className="w-full pt-6 px-5">
                  <Button
                    variant="destructive"
                    type="submit"
                    className="lg:py-3 py-4 font-bold lg:text-lg lg:leading-6 text-[18px] leading-7 bg-[#002C4E] hover:bg-[#002C4E] w-full"
                  >
                    Save Address
                  </Button>
                </section>
              </form>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
};

export default PaymentAddressCard;
