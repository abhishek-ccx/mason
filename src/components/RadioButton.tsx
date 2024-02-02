import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import StoneberryCreditIcon from "./icons/stoneberryCreditIcon";
import CreditCardsIcon from "./icons/creditCardsIcon";

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <section className="flex items-center space-x-2.5 border border-[#B6B6B8] rounded-md shadow-md pl-4">
        <RadioGroupItem value="Credit/Debit Card" id="r1" />
        <Label
          htmlFor="r1"
          className="flex justify-between items-center w-full pl-2"
        >
          <p className="text-[18px] leading-6 py-4 font-normal">
            Credit/Debit Card
          </p>
          <CreditCardsIcon className="pr-4 h-9 w-[149px]" />
        </Label>
      </section>
      <section className="flex items-center space-x-2.5 border border-[#B6B6B8] rounded-md shadow-md pl-[17px]">
        <RadioGroupItem value="Stoneberry Credit" id="r2" />
        <Label
          htmlFor="r2"
          className="flex justify-between items-center w-full pl-2"
        >
          <p className="text-[18px] leading-6 py-4 font-normal">
            Stoneberry Credit
          </p>
          <StoneberryCreditIcon className="py-px pb-2 h-14 w-[153.42px]" />
        </Label>
      </section>
    </RadioGroup>
  );
}
