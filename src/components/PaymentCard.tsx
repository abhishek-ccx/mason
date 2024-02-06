import { Button } from "@/components/ui/button";
import EditSquare from "./icons/editSquare";
import DeleteSvg from "./icons/delete";
import CheckCircle from "./icons/checkCircle";
import CheckWhite from "./icons/checkWhite";
interface PaymentCardProps {
  name: string;
  address: string;
  phoneNumber: string;
  isDefault: boolean;
}

const PaymentCard: React.FC<PaymentCardProps> = ({
  name,
  address,
  phoneNumber,
  isDefault,
}) => {
  return (
    <section className="lg:p-8 lg:m-0 m-4 p-4 rounded-md shadow-sm shadow-[#B6B6B8] border border-[#B6B6B8]">
      {isDefault && (
        <section className="pb-6 flex items-center gap-2">
          <CheckCircle className="h-4 w-4" />
          <p className="font-bold leading-5 test-sm uppercase">
            Default Shipping and Billing Address
          </p>
        </section>
      )}
      <strong className="text-lg leading-6 font-semibold">{name}</strong>
      <p className="text-base font-normal leading-5 pr-9">{address}</p>
      <p className="text-base font-normal leading-5 pt-4">{phoneNumber}</p>
      <section className="pt-6 flex items-center gap-4">
        <Button
          type="submit"
          className="w-full px-4 py-3 bg-white hover:bg-white border border-[#B6B6B8]"
        >
          <section className="flex items-center gap-2">
            <EditSquare className="h-5 w-5 fill-white" />
            <p className="font-normal leading-5 text-sm text-black">Edit</p>
          </section>
        </Button>
        <Button
          type="submit"
          className="w-full px-4 py-3 bg-white hover:bg-white border border-[#B6B6B8]"
        >
          <section className="flex items-center gap-2">
            <DeleteSvg className="h-5 w-5 fill-white" />
            <p className="font-normal leading-5 text-black">Remove</p>
          </section>
        </Button>
      </section>
      {!isDefault && (
        <section className="flex items-center">
          <Button
            type="submit"
            className="px-16 py-3 bg-white hover:bg-white border border-[#B6B6B8] mt-4 mx-auto"
          >
            <section className="flex items-center gap-2 ">
              <CheckWhite className=" fill-white w-5 h-5" />
              <p className="font-normal leading-5 text-black">Set as Default</p>
            </section>
          </Button>
        </section>
      )}
    </section>
  );
};

export default PaymentCard;
