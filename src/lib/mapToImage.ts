import { join, normalize, relative, resolve } from 'path'
/**
 * Maps the image path to the correct path:
 *  - If the image source starts with '/', the image is mapped to the /public directory directly.
 *  - Otherwise, the image is mapped to:
 *      /public/build-images/<EVENTS OR POSTS>/<EVENT OR POST NAME>/<IMAGE NAME>
 * directory. The images in content are copied to public/build-images by the webpack configuration
 * in the same structure as the content directory.
 *
 * The function always returns relative to the public directory, starting with a '/', excluding
 * the public folder.
 *
 * If, for some reason, the image is outside of the content or public directory, or the
 * mdxFolderPath is outside the content directory, the function will throw an error.
 *
 * @param mdxFolderPath The path of the folder containing the MDX file.
 * @param imagePath The original path given in the image, where / indicates the public directory.
 *
 * @returns The mapped image path and the absolute image path.
 */
export default function mapToImage(
    mdxFolderPath: string,
    imagePath: string
): {
    nextImagePath: string
    absoluteImagePath: string
} {
    const contentPath = resolve(process.cwd(), './content')
    const publicPath = resolve(process.cwd(), './public')
    const pathRelativeToContentFolder = normalize(relative(contentPath, mdxFolderPath))

    const absoluteMdxFolderPath = resolve(mdxFolderPath)
    if (!absoluteMdxFolderPath.startsWith(contentPath)) {
        throw new Error(`MDX folder path ${mdxFolderPath} is outside the content directory.`)
    }

    // If the image path starts with '/', it has to be in the public directory.
    if (imagePath.startsWith('/')) {
        const imageAbsolutePath = resolve(publicPath, imagePath.substring(1)) // Remove leading '/'
        if (!imageAbsolutePath.startsWith(publicPath)) {
            throw new Error(
                `Mapped image path ${imagePath} is outside the public directory. ` +
                    'Is the image you are trying to access in the content or public directory? ' +
                    'If you want to access an image in the content directory, do not use the ' +
                    '/ prefix. Only use the / prefix for images in the public directory.'
            )
        }
        return { nextImagePath: normalize(imagePath), absoluteImagePath: imageAbsolutePath }
    } else {
        const mappedPath = normalize(join('/build-images', pathRelativeToContentFolder, imagePath))
        const imageBuildsPath = resolve(publicPath, 'build-images')
        const imageAbsolutePath = resolve(publicPath, mappedPath.substring(1)) // Remove leading '/'

        if (!imageAbsolutePath.startsWith(imageBuildsPath)) {
            throw new Error(
                `Mapped image path ${mappedPath} is outside the public directory. ` +
                    'Is the image you are trying to access in the content or public directory? ' +
                    'If you want to access an image in the content directory, do not use the ' +
                    '/ prefix. Only use the / prefix for images in the public directory.'
            )
        }
        return { nextImagePath: mappedPath, absoluteImagePath: imageAbsolutePath }
    }
}
