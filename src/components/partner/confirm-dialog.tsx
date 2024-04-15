"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useEffect, useState } from "react";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { useClientSession } from "@/utils/server-actions/get-client-session";
import { confirmPartner } from "@/utils/server-actions/confirm-partner";
import { toast } from "sonner";

const ConfirmDialog = () => {
  const session = useClientSession();
  const [mounted, setMounted] = useState<boolean>(false);
  const [confirm, setConfirm] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
    }
  }, []);

  if (!mounted) {
    return null;
  }

  const confirmPartnerHandler = () => {
    confirmPartner(session?.userId!, session?.email!).then((res) => {
      if (res.success) {
        toast(res.success);
        router.push(`/partner/${session?.userId}`);
      } else {
        toast(res.error);
        router.push("/");
      }
    });
  };
  return (
    <>
      <Dialog defaultOpen onOpenChange={() => router.push("/")}>
        <DialogContent className="bg-brand/secondary">
          <DialogHeader>
            <DialogTitle>
              Confirm that you want to become a partner with{" "}
              <span className="text-brand/pink">wroom</span>.
            </DialogTitle>
          </DialogHeader>
          <div className="flex items-center gap-2">
            <Checkbox onCheckedChange={() => setConfirm((prev) => !prev)} />
            <p className="text-sm">
              Please check the box to show your confirmation
            </p>
          </div>
          <Button disabled={!confirm} onClick={confirmPartnerHandler}>
            Confirm
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ConfirmDialog;
