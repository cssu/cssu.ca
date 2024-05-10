type EventPageImageProps = {
    src: string | undefined
    alt: string | undefined
    contentType: string
    contentName: string
}

export default function EventPageImage({
    src,
    alt,
    contentType,
    contentName,
}: EventPageImageProps) {
    return (
        // Modify the src so that it is mapped to /build-images/<contentType>/<contentName>/<src>.
        // For example, this could be `/build-images/events/ai-and-ethics/aiethics.png`.
        // The images in content are copied to public/build-images by webpack.
        // eslint-disable-next-line @next/next/no-img-element
        <img src={`/build-images/${contentType}/${contentName}/${src}`} alt={alt} />
        // TODO: Convert img to next/Image
    )
}
