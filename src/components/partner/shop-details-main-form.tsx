"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { partnerFormSchema } from "@/lib/schema/index";
import { Partner, WashroomImage } from "@prisma/client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createPartner } from "@/utils/server-actions/create-partner";
import { UploadDropzone } from "@/utils/uploadthing";
import { TrashIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Textarea } from "../ui/textarea";

interface ShopDetailsMainFormProps {
  data: Partner;
  washroomData: WashroomImage[] | null;
}
const ShopDetailsMainForm = ({
  data,
  washroomData,
}: ShopDetailsMainFormProps) => {
  const [files, setFiles] = useState<string[]>([]);
  const [imageCompleted, setImageCompleted] = useState<boolean>(false);

  useEffect(() => {
    if (washroomData && washroomData?.length > 0) {
      setFiles((prev) => [...washroomData.map((data) => data.fileName)]);

      setImageCompleted(true);
    }
  }, []);

  const router = useRouter();

  const form = useForm<z.infer<typeof partnerFormSchema>>({
    reValidateMode: "onChange",
    resolver: zodResolver(partnerFormSchema),
    defaultValues: {
      shopName: data.shopName || "",
      shopType: data.shopType || "",
      city: data.city || "",
      address: data.address || "",
      state: data.state || "",
      pincode: data.pincode || "",
    },
  });

  const { isSubmitting, isValid } = form.formState;

  function onSubmit(values: z.infer<typeof partnerFormSchema>) {
    createPartner(values, data.id).then((res) => {
      if (res.success) {
        toast(res.success);
        router.refresh();
      } else {
        toast(res.error);
      }
    });
  }
  return (
    <div className="mt-4 bg-brand/secondary/50 p-6 rounded-2xl">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div>
            <h1 className="text-2xl font-semibold">Business location</h1>
            <div className="space-y-8 flex-1 mt-2">
              <FormField
                control={form.control}
                name="shopName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Shop name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your shop name" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="space-y-8 flex-1">
              <FormField
                control={form.control}
                name="shopType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Shop type</FormLabel>
                    <FormControl>
                      <Input placeholder="E.g. clothing" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className="mt-6">
            <h1 className="text-2xl font-semibold">Business location</h1>
            <div className="mt-2 space-y-2">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="space-y-8 flex-1">
                  <FormField
                    control={form.control}
                    name="state"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>State</FormLabel>
                        <FormControl>
                          <Input placeholder="State" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-8 flex-1">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>City</FormLabel>
                        <FormControl>
                          <Input placeholder="City" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="space-y-8 flex-1">
                  <FormField
                    control={form.control}
                    name="pincode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Pincode</FormLabel>
                        <FormControl>
                          <Input placeholder="E.g. 123456" {...field} />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div>
                <div className="space-y-8 flex-1">
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your address"
                            {...field}
                            rows={4}
                          />
                        </FormControl>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h1 className="text-2xl mt-2 font-semibold">Washroom images</h1>
              {!imageCompleted && (
                <UploadDropzone
                  endpoint="washroomImagesUploader"
                  className="ut-button:bg-brand/pink/80 ut-label:text-brand/pink bg-brand/secondary border-2 border-brand/pink/20"
                  onClientUploadComplete={(res) => {
                    setImageCompleted(true);
                  }}
                />
              )}
              {imageCompleted && (
                <div className="space-y-2 mt-2">
                  {files.map((file) => (
                    <div className="p-2 bg-brand/secondary border border-brand/pink/20 rounded-md flex justify-between items-center">
                      <p className="text-sm"> {file}</p>
                      <Button variant="ghost">
                        <TrashIcon />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <Button
            type="submit"
            className="mt-6 max-sm:w-full"
            disabled={!imageCompleted || isSubmitting}
          >
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ShopDetailsMainForm;
