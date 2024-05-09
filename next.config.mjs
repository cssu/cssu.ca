import remarkGfm from "remark-gfm"
import remarkMdxImages from "remark-mdx-images"
import createMDX from "@next/mdx"
import path from "path"

import CopyWebpackPlugin from "copy-webpack-plugin"

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Remove the next 2 lines if you want the full Next.js experience with SSR and image optimization :) !
    output: "export",
    images: { unoptimized: true },
    // Accept MD and MDX files
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
    // Do not remove the unused parameters. They are explicitly stated here for clarity.
    webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
        config.plugins.push(
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.join(process.cwd(), "content", "**", "*.{png,jpeg,jpg}"),
                        to: ({ context, absoluteFilename }) => {
                            const relativePath = path.relative(
                                path.join(process.cwd(), "content"),
                                absoluteFilename
                            )
                            return path.join(process.cwd(), "public", "build-images", relativePath)
                        },
                        noErrorOnMissing: true,
                        globOptions: {
                            // DO NOT REMOVE! MacOS creates this hidden file, can be a burden when copying files.
                            // Only extend the list with other files that are not needed, but don't remove anything
                            // from the array below unless you have a very good reason to do so.
                            ignore: ["**/.DS_Store"],
                        },
                    },
                ],
            })
        )

        return config
    },
}

const withMDX = createMDX({
    // Add markdown plugins here
    options: {
        remarkPlugins: [
            // Github flavoured markdown
            remarkGfm,
            // Used to map image paths in MDX - see the comment of @altano in
            // - https://mmazzarolo.com/blog/2023-07-30-nextjs-mdx-image-source/
            remarkMdxImages,
        ],
        rehypePlugins: [],
    },
})

export default withMDX(nextConfig)
