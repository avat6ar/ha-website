"use client";
import { File } from "@/types/admin";

export const TBody = ({
  files,
  handleFileView,
}: {
  files: File[];
  handleFileView: (id: number) => void;
}) => {
  return (
    <tbody className="bg-white divide-y-0 divide-opacity-100">
      {files &&
        files.map((file, index) => (
          <tr key={index}>
            {[file.name, file.course_name].map((item, i) => (
              <td
                key={i}
                className={`${i === 0 ? "pl-6" : "px-3"} ${
                  i === 5 ? "pr-6" : "pl-3"
                } py-3 text-left text-base font-medium font-body ${
                  i === 0 ? "text-[rgb(17_24_39)]" : "text-[rgb(107_114_128)]"
                }`}
              >
                {item}
              </td>
            ))}
            <td className="py-3 text-left text-base font-medium font-body text-[#1363DF]">
              <a href={file.link} target="_blank">
                {file.file}
              </a>
            </td>
            <td className="px-3 py-3 text-left text-base font-medium font-body text-[rgb(107_114_128)]">
              <button
                type="button"
                onClick={() => handleFileView(file.id)}
                className="rounded-lg bg-[#1363DF] text-[#1363DF] bg-opacity-20 text-center py-[6px] px-[28px]"
              >
                View
              </button>
            </td>
          </tr>
        ))}
    </tbody>
  );
};
