import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import OTPForm from "../form /otp-form";

export type Ref = HTMLButtonElement;

export const OTPDialog = ({
  openState,
  setModalState,
}: {
  setModalState: any;
  openState?: boolean;
}) => {
  return (
    <Dialog open={openState} onOpenChange={setModalState}>
      <DialogTrigger asChild data-state="open">
        <Button variant="outline" className="hidden">
          set otp
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <OTPForm onSuccess={() => {}} onResendOTP={() => {}} />
      </DialogContent>
    </Dialog>
  );
};

export default OTPDialog;
