export const NumberItem = ({
  label,
  value,
  setVisible,
}: {
  label: string;
  value?: number;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => (
  <li className="col-span-1 bg-white rounded-lg px-5 py-2 flex items-center justify-between gap-[15px]">
    <h3 className={`text-[18px] font-body font-medium mb-[5px] text-[#082A5E]`}>
      {label}: <span className="font-medium font-heading">{value}</span>
    </h3>
    <button
      type="button"
      onClick={() => setVisible(true)}
      className="block bg-[#1363DF] text-white px-4 py-2 rounded-md text-[14px] leading-[1] font-medium hover:bg-[#082A5E] transition-all duration-300 ease-out disabled:bg-[#082A5E]"
    >
      Edit
    </button>
  </li>
);
