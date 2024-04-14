"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "./ui/dialog";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Button } from "./ui/button";
import { z } from "zod";
import { userOnboardingSchema } from "@/lib/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { onboardUser } from "@/utils/server-actions/user-onboarding";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface OnboardingProps {
  userId: string;
}
const UserOnboardingDialog = ({ userId }: OnboardingProps) => {
  const [mounted, setMounted] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);
  const onSubmit = (values: z.infer<typeof userOnboardingSchema>) => {
    onboardUser(values, userId).then((res) => {
      if (res.success) {
        toast(res.success);
        router.refresh();
      } else {
        toast(res.error);
      }
    });
  };
  const form = useForm<z.infer<typeof userOnboardingSchema>>({
    resolver: zodResolver(userOnboardingSchema),
  });

  if (mounted) {
    return (
      <Dialog defaultOpen>
        <DialogContent className="bg-brand/secondary border-brand/pink/50">
          <DialogHeader className="text-center text-2xl font-semibold">
            We would like to know about you to provide you better service
          </DialogHeader>
          <DialogDescription>
            We will not use this information elsewhere
          </DialogDescription>
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-2/3 space-y-6"
              >
                <div>
                  <FormField
                    control={form.control}
                    name="gender"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gender</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={""}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="MALE">Male</SelectItem>
                            <SelectItem value="FEMALE">Female</SelectItem>
                            <SelectItem value="NONE">
                              Prefer not to say
                            </SelectItem>
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="age"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Age</FormLabel>
                        <Input placeholder="Age" {...field} />

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </div>
        </DialogContent>
      </Dialog>
    );
  } else {
    return <></>;
  }
};

export default UserOnboardingDialog;
