import Image from "next/image";

export const FormImage = () => {
  return (
    <div className="w-full">
      <Image
        src="/images/image-form.svg"
        width={200}
        height={200}
        alt="img"
        className="w-full"
      />
    </div>
  );
};
