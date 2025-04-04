import Image from "next-image-export-optimizer";

import CSSULogo from "@/../public/cssu_square.png";

export default function Home() {
  return (
    <section className="items-stretch flex flex-col justify-between font-semibold fadeIn">
      <div className="grow shrink-0 px-6 py-24 mt-2">
        <div
          className="grow relative w-auto mx-auto my-0
                lg:max-w-[960px] xl:max-w-6xl 2xl:max-w-[1344px]"
        >
          <div
            className="ml-[-0.75rem] mr-[-0.75rem] mt-[-0.75rem]
                    last:mb-[-0.75rem] items-center md:flex"
          >
            <div
              className="block basis-0 grow shrink p-3 space-y-5 text-xl
                        md:ml-[8.33333333%] text-center md:text-left"
            >
              <h1
                className="text-[#363636] font-semibold
                                leading-[1.125] text-5xl text-center lg:text-left"
              >
                CSSU @ UofT
              </h1>
              <h2
                className="text-xl font-light leading-tight 
                            text-[#656565] break-words text-center lg:text-left"
              >
                U of T Computer Science Student Union
              </h2>
            </div>
            <div className="block basis-0 grow shrink p-3 text-xl md:ml-[8.33333333%]">
              <figure className="block relative">
                <Image
                  src={CSSULogo}
                  alt="CSSU Logo"
                  className="block h-auto w-full object-contain"
                  basePath={process.env.__NEXT_ROUTER_BASEPATH}
                  width={400}
                  height={400}
                  priority
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
