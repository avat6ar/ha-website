const services = [
  {
    service: "Bookkeeping",
    description:
      "This service primarily aims to raise the efficiency of registration, deportation, preparing the trial balance for companies, and saving time and effort for managing companies.",
  },
  {
    service: "Designing the chart of accounts",
    description:
      "The importance of designing the chart of accounts lies in facilitating the recording of accounting entries for business entities, which assists them in presenting assets, liabilities, financial flows, and profit and loss in a way that ensures that the financial statements comply with the requirements of the standards in terms of fair presentation and adequate disclosure.",
  },
  {
    service: "Preparing the financial statements",
    description:
      "Through this service, you will be able to obtain an integrated preparation of the financial statements, and these statements are prepared in accordance with well-known international standards, in order to be able to issue highly accurate financial reports that are characterized by honesty and objectivity.",
  },
  {
    service: "Setting accounting policies",
    description:
      "Any company or institution, whatever its activity and the size of its transactions, must have accounting policies that follow it. These policies clarify all accounting matters and financial activities that must be carried out within the company or institution.",
  },
  {
    service: "Designing and evaluating accounting systems for companies",
    description:
      "One of the most important accounting services that you can rely on is the service of designing accounting systems for companies, where you will get an integrated accounting system that guarantees you financial security. But if you already own an accounting system for your company, you can use the accounting system assessment service, which works to clarify the strengths, as well as the shortcomings in the accounting system, while clarifying the method of remedying the shortcomings so that your system becomes integrated.",
  },
  {
    service: "Internal audit services",
    description:
      "This service aims primarily to ensure that the work system is on the right path, as well as to ensure that managers and employees carry out their duties to the fullest within the permissible legal and financial limits.",
  },
  {
    service: "External audit services",
    description:
      "It is a group of consultations that are provided to the owner of the company or institution, where the financial position of the company is assessed, and advice is given that works to improve the financial conditions of the company and work on its development and prosperity among its peers from competing companies.",
  },
  {
    service: "Fixed assets physical Count",
    description:
      "This service assists business entities in inventorying fixed assets in order to prepare a record for them that contains the original cost, the associated annual depreciation, and the residual value in case a decision is taken to dispose of the asset.",
  },
];

export const Services = () => {
  return (
    <section className="py-[120px] w-full bg-[#F4F7FB] relative z-[1]">
      <div className="container">
        <div className="text-center mb-8">
          <h2 className="md:text-[36px] text-[29px] leading-[1.32] font-heading text-[#082A5E] font-semibold">
            Our{" "}
            <span className="text-[#1363DF] relative inline-block">types</span>{" "}
            of Consultation
          </h2>
        </div>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
          {services.map(item => (
            <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6" key={item.service}>
              <span className="inline-block rounded bg-blue-600 p-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </span>

              <a href="#">
                <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                  {item.service}
                </h3>
              </a>

              <p className="mt-2 line-clamp-4 text-sm/relaxed text-gray-500">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
