import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import StoneberryCreditIcon from "./icons/stoneberryCreditIcon";
import CreditCardsIcon from "./icons/creditCardsIcon";

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="comfortable">
      <section className="flex items-center space-x-2.5 border border-[#B6B6B8] rounded-md shadow-md pl-[17px]">
        <RadioGroupItem value="Credit/Debit Card" id="r1" />
        <Label
          htmlFor="r1"
          className="flex justify-between items-center w-full pl-[7px]"
        >
          <p className="text-[18px] leading-[25.2px]  pt-[18px] pb-[17px] font-normal">
            Credit/Debit Card
          </p>
          <CreditCardsIcon className="pr-[15px] h-[35px] w-[149px]" />
        </Label>
      </section>
      <section className="flex items-center space-x-2.5 border border-[#B6B6B8] rounded-md shadow-md pl-[17px]">
        <RadioGroupItem value="Stoneberry Credit" id="r2" />
        <Label
          htmlFor="r2"
          className="flex justify-between items-center w-full pl-[7px]"
        >
          <p className="text-[18px] leading-[25.2px]  pt-[18px] pb-[17px] font-normal">
            Stoneberry Credit
          </p>
          <StoneberryCreditIcon className="pt-[1px] pb-[4px] h-[55px] w-[153.42px]" />
        </Label>
      </section>
    </RadioGroup>
  );
}
