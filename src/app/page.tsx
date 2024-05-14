import Image from 'next/image'

export default function Home() {
    return (
        <section
            className="items-stretch flex flex-col justify-between
            is-default font-semibold fadeIn"
        >
            <div className="hero-body mt-2">
                <div className="hero-container">
                    <div className="hero-columns is-vcentered">
                        <div className="hero-column space-y-5 text-xl is-offset-1 landing-caption">
                            <h1
                                className="text-[#363636] font-semibold
                                leading-[1.125] text-5xl is-spaced"
                            >
                                CSSU @ UofT
                            </h1>
                            <h2
                                className="text-xl font-light leading-tight 
                            text-[#656565] break-words"
                            >
                                U of T Computer Science Student Union
                            </h2>
                        </div>
                        <div className="hero-column text-xl is-offset-1">
                            <figure className="block relative p-2 md:p-4">
                                <Image
                                    src="/cssu_square.png"
                                    alt="CSSU Logo"
                                    width={400}
                                    height={400}
                                    priority
                                    className="block h-auto w-full object-contain"
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
