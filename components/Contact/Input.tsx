import { UseFormRegister } from "react-hook-form";
interface InputProps {
  id: string;
  placeholder: string;
  register: UseFormRegister<any>;
  error?: string|null;
}

export const Input: React.FC<InputProps> = ({ id, placeholder, register, error }) => (
  <>
    <input
      type="text"
      {...register(id)}
      id={id}
      placeholder={placeholder}
      className="w-full block border border-[#DAE0E7] rounded-[3px] bg-white font-normal text-[15px] text-[#39557E] py-[11px] px-[20px] focus:border-[#1363DF]"
    />
    {error && <p className="mt-2 text-pink-600 text-base">{error}</p>}
  </>
);
