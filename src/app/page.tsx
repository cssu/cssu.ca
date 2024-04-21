import Image from "next/image"

export default function Home() {
    return (
        <main className="pt-24 pb-24 flex-grow min-h-screen">
            <div className="container mx-auto flex flex-wrap items-center justify-center h-full">
                <div className="px-6 w-full md:w-7/12">
                    <h1 className="ml-6 text-5xl font-medium mb-6 text-gray-800">CSSU @ UofT</h1>
                    <h2 className="ml-6 font-light text-xl text-gray-400">
                        U of T Computer Science Student Union
                    </h2>
                </div>
                <div className="px-3 w-full md:w-5/12">
                    <div className="relative block w-full h-full justify-end">
                        <Image
                            src="/cssu_square.png"
                            alt="CSSU Logo"
                            width={500}
                            height={500}
                            objectFit="contain"
                            layout="fixed"
                        />
                    </div>
                </div>
            </div>
        </main>
    )
}
