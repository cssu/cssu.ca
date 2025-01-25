'use client'

import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import { useState } from 'react'

export default function CommunityHub() {
    const clubs = [
        {
            name: 'Bioinformatics & Computational Biology',
            image: '/clubs/bioinformatics.png',
            description: 'Interdisciplinary program combining life science and computing',
            instagram: 'https://www.instagram.com/bcbsa.uoft/',
        },
        {
            name: 'Department of Computer Science',
            image: '/clubs/dcs.webp',
            description: "UofT's department of Computer Science!",
            instagram: 'https://www.instagram.com/uoftcompsci/',
            linkedin: 'https://www.linkedin.com/school/uoftcompsci/',
        },
    ]
    const [clubIndex, setClubIndex] = useState(0)

    return (
        <div
            className="ml-[-0.75rem] mr-[-0.75rem] mt-[-0.75rem]
                    last:mb-[-0.75rem] items-center md:flex"
        >
            <div
                className="block basis-0 grow shrink p-3 space-y-5 text-xl
                        text-center md:text-left"
            >
                <div className="relative w-96 h-96 flex items-center justify-center ml-auto mr-auto md:ml-0 md:mr-0 lg:ml-0 lg:mr-0">
                    <img
                        src="/c.png"
                        alt=""
                        className="absolute inset-0 w-full h-full object-contain"
                    />

                    <div
                        className="relative w-70 h-60 bg-white rounded-full flex flex-col items-center justify-center ml-5 pt-10 pr-10 pl-10"
                        style={{ boxShadow: '0 0 4px rgb(150, 150, 150)' }}
                    >
                        <h2 className="text-center text-base font-thin mb-2 max-w-[180px]">
                            {clubs[clubIndex].name}
                        </h2>

                        <div className="items-center flex pb-10">
                            <div>
                                <img
                                    src={clubs[clubIndex].image}
                                    alt=""
                                    className="w-10 h-10 lg:w-20 lg:h-20 md:w-14 md:h-14 sm:w-10 sm:h-10 mb-4"
                                />
                            </div>

                            <div>
                                <p
                                    className="pl-2 text-left text-gray-600 font-light mb-4 max-w-[100px]"
                                    style={{ fontSize: '0.6rem', lineHeight: 1 }}
                                >
                                    {clubs[clubIndex].description}
                                </p>

                                <div className="flex space-x-2 pl-2">
                                    <FaLinkedin />
                                    <FaInstagram />
                                </div>
                            </div>
                        </div>

                        <button
                            className="absolute bottom-2 border border-black rounded-[10px] p-[5px]"
                            onClick={() => setClubIndex((clubIndex + 1) % clubs.length)}
                        >
                            <img src="/refresh.png" alt="" className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="block basis-0 grow shrink p-3 text-xl md:ml-[8.33333333%]">
                <img
                    src="/ssu.png"
                    alt=""
                    className="absolute inset-0 w-50 h-50 ml-auto mt-auto mb-auto mr-40 z-[-5] object-contain hidden lg:block"
                />
                <p className="text-right font-thin text-4xl">Community Hub</p>
                <div className="w-20 h-1 bg-black my-4 ml-auto mt-10 mb-10"></div>
                <p className="text-right font-thin">
                    We are connected with several other student unions and dozens of other computer
                    science student organizations recognized by the university. Please check them
                    out for more that our community has to offer!
                </p>
                <button
                    style={{
                        marginLeft: '78%',
                        marginTop: 40,
                        backgroundColor: 'black',
                        borderRadius: 5,
                        paddingLeft: 15,
                        paddingRight: 15,
                        paddingTop: 5,
                        paddingBottom: 5,
                        color: 'lightgrey',
                        fontWeight: 400,
                        fontSize: 15,
                    }}
                >
                    Learn More
                </button>
            </div>
        </div>
    )
}
