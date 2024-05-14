/**
 * Resizes an image to ensure its height meets the specified minimum value
 * while maintaining the original aspect ratio. This function handles both
 * downscaling and upscaling scenarios based on the provided dimensions.
 *
 * @param {number} originalWidth - The original width of the image.
 * @param {number} originalHeight - The original height of the image.
 * @param {number} minHeight - The minimum height the image should have after resizing.
 *
 * @returns An object containing the new width and height of the image.
 *
 * @example
 * // Downscale example
 * const dimensions = resizeImage(1000, 2000, 200)
 * console.log(dimensions) // { newWidth: 100, newHeight: 200 }
 *
 * @example
 * // Upscale example
 * const dimensions = resizeImage(50, 100, 200)
 * console.log(dimensions) // { newWidth: 100, newHeight: 200 }
 *
 * @example
 * // Same dimensions example
 * const dimensions = resizeImage(100, 200, 200)
 * console.log(dimensions) // { newWidth: 100, newHeight: 200 }
 */
export default function calculateImageDimensions(
    originalWidth: number,
    originalHeight: number,
    minHeight: number
): { newWidth: number; newHeight: number } {
    const aspectRatio = originalWidth / originalHeight

    let newWidth: number
    let newHeight: number

    if (originalHeight > minHeight) {
        // Downscale
        newHeight = minHeight
        newWidth = Math.round(newHeight * aspectRatio)
    } else {
        // Upscale
        newHeight = minHeight
        newWidth = Math.round(newHeight * aspectRatio)
    }

    return { newWidth, newHeight }
}
