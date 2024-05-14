import { readFileSync } from 'fs'

import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'

type EventBannerProps = {
    title: string
    image?: string
    absoluteImagePath?: string
}

export default async function EventBanner({ title, image, absoluteImagePath }: EventBannerProps) {
    if (image && absoluteImagePath) {
        const buffer = readFileSync(absoluteImagePath)
        const { base64 } = await getPlaiceholder(buffer)

        return (
            <Image
                src={image}
                className="w-auto h-full m-auto object-contain"
                alt={`Image describing ${title}`}
                placeholder="blur"
                blurDataURL={base64}
                fill
            />
        )
    } else {
        return (
            <Image
                src="/horizontal_logo_black.png"
                className="h-auto m-auto object-contain"
                alt="CSSU placeholder logo"
                fill
            />
        )
    }
}
