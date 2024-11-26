export const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-[9999]">
      <div className="w-[50px] h-[60px] text-center flex gap-[2px]">
        {[...Array(5)].map((_, index) => (
          <div
            key={index}
            className="bg-[#1363DF] h-full w-[8px] inline-block animate-[loading_1.2s_infinite_ease-in-out]"
            style={{
              animationDelay: index === 0 ? "" : `-${index / 10}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
