import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionContainer() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem
        value="item-11"
        className="border border-[#B6B6B8] rounded-md shadow-md bg-[#F4F4F4] mb-4 pl-6 pr-4"
      >
        <AccordionTrigger className="text-left">
          Terms & Conditions
        </AccordionTrigger>
        <AccordionContent className="text-left">
          Yes. It adheres to the WAI-ARIA design pattern.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-21"
        className="border border-[#B6B6B8] rounded-md shadow-md bg-[#F4F4F4] mb-4 pl-6 pr-4"
      >
        <AccordionTrigger className="text-left">
          Privacy Policy
        </AccordionTrigger>
        <AccordionContent className="text-left">
          Yes. It comes with default styles that matches the other
          components&apos; aesthetic.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem
        value="item-31"
        className="border border-[#B6B6B8] rounded-md shadow-md bg-[#F4F4F4] mb-4 pl-6 pr-4"
      >
        <AccordionTrigger className="text-left">
          Credit Report & Electronic Communications Authorization
        </AccordionTrigger>
        <AccordionContent className="text-left">
          Yes. It&apos;s animated by default, but you can disable it if you
          prefer.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
