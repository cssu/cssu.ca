import { readFileSync } from 'fs'
import { join } from 'path'

import Image from 'next/image'
import { getPlaiceholder } from 'plaiceholder'

type ContentImageProps = {
    contentType: string
    contentSubdirectory: string
    image?: string
    title: string
}

export default async function ContentImageBanner({
    contentType,
    contentSubdirectory,
    image,
    title,
}: ContentImageProps) {
    if (image) {
        const imageUri = join(
            process.cwd(),
            `./public/build-images/${contentType}/${contentSubdirectory}/${image}`
        )

        const buffer = readFileSync(imageUri)
        const { base64 } = await getPlaiceholder(buffer)

        return (
            <Image
                src={`/build-images/${contentType}/${contentSubdirectory}/${image}`}
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
