import Image from 'next-image-export-optimizer'

import CSSULogo from '@/../public/cssu_square.png'
import EmblaCarousel from '@/components/Carousel'
import './embla.css'
export default function Home() {
    return (
        <>
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

            {/*Events Section*/}
            <section className="px-6 py-16">
                <div className="mx-auto max-w-[720px]">
                    {/*Events Header*/}
                    <div
                        className="
                        flex flex-col text-center items-center md:text-left md:flex-row md:justify-between md:space-y-0
                    "
                    >
                        <h2 className="text-4xl font-extralight">Events</h2>

                        <div
                            className=" border-l-black border-l-8 pl-12
                            grid grid-cols-3 text-justify gap-y-2 gap-x-4
                            md:items-center max-w-[480px]
                        "
                        >
                            <p className="col-span-3">
                                We always have something fun going on. Keep up to date on upcoming
                                events!
                            </p>
                            {/*Subscribe Box*/}
                            <input className="col-span-2 px-4 py-2" type="email" placeholder="your@email.com" />
                            <button
                                className=" col-span-1
                            py-2 bg-red-950 text-white font-extralight rounded-lg hover:bg-red-900
                            "
                            >
                                Subscribe
                            </button>
                        </div>
                    </div>

                    <div className="timeline">
                        <div className="timeline-item">July 2</div>
                        <div className="timeline-indicator">Today, Aug 12</div>
                        <div className="timeline-item highlight">Sep 5</div>
                        <div className="timeline-item">Nov 10</div>
                        <div className="timeline-item">Dec 5</div>
                    </div>
                    <div className="view-all-container">
                        <button>View All Events</button>
                    </div>
                </div>
                <EmblaCarousel slides={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}/>
            </section>
        </>
    )
}
