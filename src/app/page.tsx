import Image from "next/image"

export default function Home() {
    // return (
    //     <main className="pt-24 pb-24 flex-grow min-h-screen fadeIn">
    //         <div className="container mx-auto flex flex-wrap items-center justify-center h-full">
    //             <div className="px-6 w-full md:w-7/12 border-red-400 border-4 text-left">
    //                 <h1 className="ml-6 text-5xl font-medium mb-6 text-gray-800">CSSU @ UofT</h1>
    //                 <h2 className="ml-6 font-light text-xl text-gray-400 text-center md:text-left">
    //                     U of T Computer Science Student Union
    //                 </h2>
    //             </div>
    //             <div className="px-3 w-full md:w-5/12">
    //                 <div className="relative block w-full h-full justify-end">
    //                     <Image
    //                         src="/cssu_square.png"
    //                         alt="CSSU Logo"
    //                         width={400}
    //                         height={400}
    //                         objectFit="contain"
    //                         layout="fixed"
    //                     />
    //                 </div>
    //             </div>
    //         </div>
    //     </main>
    // )
    return (
        <section className="hero is-fullheight is-default is-bold fadeIn">
            <div className="hero-body mt-2">
                <div className="container">
                    <div className="columns is-vcentered">
                        <div className="column is-5 is-offset-1 landing-caption">
                            <h1 className="title is-1 is-bold is-spaced">CSSU @ UofT</h1>
                            <h2 className="subtitle is-5 is-muted">
                                U of T Computer Science Student Union
                            </h2>
                        </div>
                        <div className="column is-5 is-offset-1">
                            <figure className="image">
                                <Image
                                    src="/cssu_square.png"
                                    alt="CSSU Logo"
                                    width={400}
                                    height={400}
                                    objectFit="contain"
                                    layout="fixed"
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
