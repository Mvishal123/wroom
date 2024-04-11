"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Partner } from "@prisma/client";
import { Washroom } from "@prisma/client";
import { partnerFormSchema } from "@/lib/schema/partner-form-schema";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";

interface ShopDetailsMainFormProps {
  data: Partner;
  washroomData: Washroom | null;
}
const ShopDetailsMainForm = ({ data }: ShopDetailsMainFormProps) => {
  const form = useForm<z.infer<typeof partnerFormSchema>>({
    resolver: zodResolver(partnerFormSchema),
    defaultValues: {
      shopName: data.shopname || "",
      shopType: data.shopType || "",
      city: data.city || "",
      address: data.address || "",
      state: data.state || "",
      pincode: data.pincode || "",
      images: [],
    },
  });

  function onSubmit(values: z.infer<typeof partnerFormSchema>) {
    console.log(values);
  }
  return (
    <div className="mt-4">
      <Form {...form}>
        <div className="flex flex-col md:flex-row gap-4">
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 flex-1"
          >
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
          </form>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 flex-1"
          >
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
          </form>
        </div>

        <div className="mt-6">
          <h1 className="text-2xl font-semibold">Business location</h1>
          <div className="mt-2 space-y-2">
            <div className="flex flex-col md:flex-row gap-4">
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 flex-1"
              >
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
              </form>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 flex-1"
              >
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
              </form>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 flex-1"
              >
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
              </form>
            </div>
            <div>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 flex-1"
              >
                <FormField
                  control={form.control}
                  name="pincode"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pincode</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Your address" {...field} rows={4}/>
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default ShopDetailsMainForm;
