import { IoMdClose } from "react-icons/io";

export const Model = ({
  children,
  visible,
  setVisible,
}: {
  children: React.ReactNode;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <>
      {visible && (
        <div className="fixed h-full w-full left-0 top-0 flex items-center justify-center z-[1111] animate-fadeIn">
          <div className="bg-white rounded-[4px] md:p-8 p-5 overflow-x-hidden max-h-[640px] overflow-y-auto relative z-[1] text-left">
            <IoMdClose
              className="absolute top-[25px] right-[25px] text-[20px] cursor-pointer"
              onClick={() => setVisible(false)}
            />
            {children}
          </div>
          <div
            className={`fixed h-full w-full left-0 top-0 z-[-1] bg-black bg-opacity-50`}
            onClick={() => setVisible(false)}
          ></div>
        </div>
      )}
    </>
  );
};
