import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import OTPForm from "../form /otp-form";
import { useEmailStore } from "@/utils/store/email";
import { useNavigate } from "react-router";

export type Ref = HTMLButtonElement;

export const OTPDialog = ({
  openState,
  setModalState,
}: {
  setModalState: any;
  openState?: boolean;
}) => {
  const { clearEmail } = useEmailStore();
  const navigate = useNavigate();
  return (
    <Dialog open={openState} onOpenChange={setModalState}>
      <DialogTrigger asChild data-state="open">
        <Button variant="outline" className="hidden">
          set otp
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <OTPForm
          onSuccess={() => {
            clearEmail();
            navigate("/auth/signin-doctor");
          }}
          onResendOTP={() => {}}
        />
      </DialogContent>
    </Dialog>
  );
};

export default OTPDialog;
