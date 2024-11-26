import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FormGroup } from "../FormGroup";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { useState } from "react";
import axios from "@/lib/axios";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

export const FormOnline = ({ id }: { id: string | number }) => {
  const { handleSubmit, reset, register } = useForm();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<Record<string, string> | null>();
  const router = useRouter();
  const [errors, setErrors] = useState<Record<string, string | null> | null>();

  const onSubmit: SubmitHandler<FieldValues> = async formData => {
    setLoading(true);
    console.log("🚀 ~ FormOnline ~ formData:", formData);
    try {
      const { data } = await axios.post("/book_course/" + id, formData);

      if (data.error) {
        setErrors(data.error);
        data.error.message &&
          setMessage({
            type: "error",
            message: data.error.message,
          });
      } else {
        setMessage({
          type: "success",
          message: "Add Blog Successfully",
        });
        setErrors({});
        reset();
      }
    } catch (error: AxiosError | any) {
      if (error.response.status == 401) {
        router.push("/auth/login");
        return;
      }
      setMessage({
        type: "error",
        message: "An error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog
      onOpenChange={open => {
        setOpen(open);
        reset();
      }}
      open={open}
    >
      <DialogTrigger asChild>
        <button className="w-full bg-[#1363DF] text-white inline-block cursor-pointer text-[15px] font-semibold tracking-[0.5px] leading-[1] pt-[19px] px-[24p]x pb-[16px] text-center uppercase transition-all duration-300 ease-out rounded-[4px] hover:bg-[#082A5E]">
          Register
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[650px] bg-white">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form action="#" method="post" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-4 py-4">
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
              <FormGroup
                id="first_name"
                type="text"
                placeholder="Enter your first name"
                title="First Name"
                register={register}
                error={errors?.first_name}
              />
              <FormGroup
                id="last_name"
                type="text"
                placeholder="Enter your last name"
                title="Last Name"
                register={register}
                error={errors?.last_name}
              />
            </div>
            <FormGroup
              id="phone_number"
              type="text"
              placeholder="Enter your phone number"
              title="Phone Number"
              register={register}
              error={errors?.phone_number}
            />
            <FormGroup
              id="whatsapp_number"
              type="text"
              placeholder="Enter your Whatsapp number"
              title="Whatsapp Number"
              register={register}
              error={errors?.whatsapp_number}
            />
            <FormGroup
              id="email"
              type="email"
              placeholder="Enter your email address"
              title="Email Address"
              register={register}
              error={errors?.email}
            />
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
              <FormGroup
                id="current_work"
                type="text"
                placeholder="Enter your current work"
                title="Current Work"
                register={register}
                error={errors?.current_work}
              />
              <FormGroup
                id="Country"
                type="text"
                placeholder="Enter your country"
                title="country"
                register={register}
                error={errors?.country}
              />
            </div>
          </div>
          {message && (
            <p
              className={`mt-2 text-base ${
                message.type == "error" ? "text-red-600" : "text-green-600"
              }`}
            >
              {message.message}
            </p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1363DF] text-white inline-block cursor-pointer text-[15px] font-semibold tracking-[0.5px] leading-[1] pt-[19px] px-[24p]x pb-[16px] text-center uppercase transition-all duration-300 ease-out rounded-[4px] hover:bg-[#082A5E]"
          >
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};
