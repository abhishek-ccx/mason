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
            <AccordionTrigger className="p-4 font-semibold leading-6 text-base">
              Add New Address
            </AccordionTrigger>
            <AccordionContent className="p-4">
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </>
  );
};

export default PaymentAddressCard;
