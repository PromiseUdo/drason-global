// "use client";

// import React, { useState } from "react";
// import MaxWidthWrapper from "@/components/max-width-wrapper";
// import { Form, FormField } from "@/components/ui/form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import z from "zod/v3";
// import { ContactFormSchema } from "@/types/contact-form-schema";

// interface ContactFormData {
//   name: string;
//   subject: string;
//   email: string;
//   phone: string;
//   businessUnit: string;
//   message: string;
// }

// const ContactForm: React.FC = () => {
//   const [formData, setFormData] = useState<ContactFormData>({
//     name: "",
//     subject: "",
//     email: "",
//     phone: "",
//     businessUnit: "",
//     message: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<
//       HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
//     >
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const form = useForm<z.infer<typeof ContactFormSchema>>({
//     resolver: zodResolver(ContactFormSchema),
//     defaultValues: {
//       name: "",
//       email: "",
//       phone: "",
//       businessUnit: "",
//       message: "",
//     },
//   });

//   async function onSubmit(values: z.infer<typeof ContactFormSchema>) {}

//   return (
//     <section className="">
//       <MaxWidthWrapper>
//         <div className="py-10 flex items-center flex-col">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-4 sm:mb-0">
//             Contact Us
//           </h2>

//           <p className="text-[15px] text-[#737477] leading-[22px]">
//             Reach out to us for any query, we'd love to hear from you!
//           </p>
//         </div>
//         <div className="grid grid-cols-1 items-center w-full gap-6">
//           {/* Contact Form */}
//           <div className="shadow p-[20px] lg:pt-[50px] lg:p-[50px] flex flex-col gap-[1.25rem] w-full">
//             {/* <h2 className="text-3xl font-bold font-heading">
//               How can we help you?
//             </h2> */}
//             <div className="pb-[20px] leading-[22.5px] text-[15px]">
//               <p>Fill the form below to send us a message</p>
//             </div>

//             <Form {...form}>
//               <form
//                 onSubmit={form.handleSubmit(onSubmit)}
//                 className="flex flex-col space-y-3 items-start w-full"
//               >
//                 <FormField
//                   control={form.control}
//                   name="email"
//                   render={({ field }) => (
//                     <FormItem className="w-full flex items-start flex-col">
//                       <FormLabel className="text-white text-base">
//                         Email{" "}
//                       </FormLabel>

//                       <FormControl>
//                         <Input
//                           {...field}
//                           className="w-full text-[#181818] placeholder:text-[#181818] bg-[#DEEDCC]"
//                           type="text"
//                           // onChange={() => setCustomerName(field.value)}
//                           // value={installer?.name ?? ""}
//                           // disabled={true}

//                           placeholder="Enter email"
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 {/* <FormField
//                   control={form.control}
//                   name="phone"
//                   render={({ field }) => (
//                     <FormItem className="w-full flex items-start flex-col">
//                       <FormLabel className="text-white text-base">
//                         Phone Number{" "}
//                       </FormLabel>

//                       <FormControl>
//                         <Input
//                           {...field}
//                           className="w-full  bg-[#DEEDCC]"
//                           type="text"

//                           placeholder="Enter Phone number"
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 /> */}

//                 <FormField
//                   control={form.control}
//                   name="phone"
//                   render={({ field }) => (
//                     <PhoneInputComponent
//                       value={field.value}
//                       onChange={field.onChange}
//                       name="phone"
//                       label="Phone Number"
//                     />
//                   )}
//                 />

//                 <FormField
//                   control={form.control}
//                   name="password"
//                   render={({ field }) => (
//                     <FormItem className="w-full flex items-start flex-col">
//                       <FormLabel className="text-white text-base">
//                         Password{" "}
//                       </FormLabel>

//                       <FormControl>
//                         <Input
//                           {...field}
//                           className="w-full  bg-[#DEEDCC]"
//                           placeholder="Password"
//                           type={showPassword ? "text" : "password"}
//                           autoComplete="current-password"
//                           endContent={
//                             <span onClick={togglePasswordShow}>
//                               {showPassword ? (
//                                 <EyeOff className="w-4 h-4" />
//                               ) : (
//                                 <Eye className="w-4 h-4" />
//                               )}
//                             </span>
//                           }
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />
//                 <FormField
//                   control={form.control}
//                   name="confirm_password"
//                   render={({ field }) => (
//                     <FormItem className="w-full flex items-start flex-col">
//                       <FormLabel className="text-white text-base">
//                         Confirm Passowrd{" "}
//                       </FormLabel>

//                       <FormControl>
//                         <Input
//                           {...field}
//                           className="w-full  bg-[#DEEDCC]"
//                           placeholder="Confirm Password"
//                           type={showConfirmPassword ? "text" : "password"}
//                           autoComplete="current-password"
//                           endContent={
//                             <span onClick={toggleConfirmPasswordShow}>
//                               {showConfirmPassword ? (
//                                 <EyeOff className="w-4 h-4" />
//                               ) : (
//                                 <Eye className="w-4 h-4" />
//                               )}
//                             </span>
//                           }
//                         />
//                       </FormControl>
//                       <FormMessage />
//                     </FormItem>
//                   )}
//                 />

//                 <div className="w-full flex items-center justify-center">
//                   <Button
//                     disabled={!form.formState.isDirty}
//                     type="submit"
//                     className="w-full font-bold text-black bg-[#3EB555] hover:bg-[#359C4A]"
//                   >
//                     {isLoading ? (
//                       <Loader2 className="h-4 w-4 animate-spin text-white" />
//                     ) : (
//                       "Proceed"
//                     )}
//                   </Button>
//                 </div>
//               </form>
//             </Form>

//           </div>
//         </div>
//       </MaxWidthWrapper>
//     </section>
//   );
// };

// export default ContactForm;

"use client";

import React, { useState } from "react";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ContactFormSchema } from "@/types/contact-form-schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import z from "zod";

const ContactForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      businessUnit: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof ContactFormSchema>) {
    setIsLoading(true);
    try {
      // Replace with your form submission logic
      console.log("Form submitted:", values);
      // Reset form after submission
      form.reset();
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className="">
      <MaxWidthWrapper>
        <div className="w-full">
          <div className="py-10 flex items-center flex-col">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-heading mb-4 sm:mb-0">
              Contact Us
            </h2>
            <p className="text-[15px] text-[#737477] leading-[22px]">
              Reach out to us for any query, we'd love to hear from you!
            </p>
          </div>

          <div className="grid grid-cols-1 items-center w-full gap-6">
            <div className="shadow-md p-[20px] lg:pt-[50px] lg:p-[50px] flex flex-col gap-[1.25rem] w-full">
              <div className="pb-[20px] leading-[22.5px] text-[15px]">
                <p>Fill the form below to send us a message</p>
              </div>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6 w-full"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name Field */}
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              {...field}
                              className="w-full rounded-none text-[15px]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Email Field */}
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your email"
                              {...field}
                              className="w-full rounded-none text-[15px]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone Field */}
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your phone number"
                              {...field}
                              className="w-full rounded-none text-[15px]"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Business Unit Field */}
                    <FormField
                      control={form.control}
                      name="businessUnit"
                      render={({ field }) => (
                        <FormItem className="shadow-none">
                          <FormLabel>Business Unit</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue
                                  className="text-[15px]"
                                  placeholder="Select business unit"
                                />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="text-[15px]">
                              <SelectItem value="Agro Services">
                                Agro Services
                              </SelectItem>
                              <SelectItem value="Marine">Marine</SelectItem>
                              <SelectItem value="Energies">Energies</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Message Field */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your message"
                            {...field}
                            className="min-h-[150px] rounded-none"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex items-center justify-center">
                    <Button
                      type="submit"
                      className="w-full max-w-xs rounded-none bg-[#890c25] hover:bg-[#6e0a1f]  "
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <Loader2 className="h-4 w-4 animate-spin mr-2 " />
                      ) : null}
                      Send Message
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default ContactForm;
