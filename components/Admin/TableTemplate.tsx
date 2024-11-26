export const TableTemplate = ({
  head,
  children,
}: {
  head: string[];
  children: React.ReactNode;
}) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead className="bg-[#F9FAFB]">
          <tr>
            {head.map((header, index) => (
              <th
                key={index}
                scope="col"
                className={`px-3 py-3 text-left text-base font-medium font-heading ${
                  index === 0 ? "pl-6" : "px-3"
                } ${index === 5 ? "pr-6" : "pl-3"} text-[rgb(17_24_39)]`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        {children}
      </table>
    </div>
  );
};
