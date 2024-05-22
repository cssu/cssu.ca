import path from 'path'

import createMDX from '@next/mdx'
// eslint-disable-next-line import/default
import CopyWebpackPlugin from 'copy-webpack-plugin'
import rehypeSlug from 'rehype-slug'
import remarkFrontmatter from 'remark-frontmatter'
import remarkGfm from 'remark-gfm'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
import remarkUnwrapImages from 'remark-unwrap-images'

import mdxFrontmatterExport from './src/lib/mdxFrontmatterExport.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        loader: 'custom',
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    },
    transpilePackages: ['next-image-export-optimizer'],
    env: {
        nextImageExportOptimizer_imageFolderPath: 'public',
        nextImageExportOptimizer_exportFolderPath: 'out',
        nextImageExportOptimizer_quality: '60',
        nextImageExportOptimizer_storePicturesInWEBP: 'true',
        nextImageExportOptimizer_exportFolderName: 'nextImageExportOptimizer',
        nextImageExportOptimizer_generateAndUseBlurImages: 'false',
    },
    // basePath: process.env.NODE_ENV === 'production' ? '/<YOUR BASE PATH HERE>' : '',
    // Accept MD and MDX files
    pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
    // Do not remove the unused parameters. They are explicitly stated here for clarity.
    webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
        config.plugins.push(
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.join(
                            process.cwd(),
                            'content',
                            '**',
                            '*.{png,jpeg,jpg,webp,gif}'
                        ),
                        to: ({ context, absoluteFilename }) => {
                            const relativePath = path.relative(
                                path.join(process.cwd(), 'content'),
                                absoluteFilename
                            )
                            return path.join(process.cwd(), 'public', 'build-images', relativePath)
                        },
                        noErrorOnMissing: true,
                        globOptions: {
                            // DO NOT REMOVE! MacOS creates this hidden file, can be a burden
                            // when copying files. Only extend the list with other files that
                            // are not needed, but don't remove anything from the array below
                            // unless you have a very good reason to do so.
                            ignore: ['**/.DS_Store'],
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
        jsx: true,
        remarkPlugins: [
            // Plugins helping with frontmatter extraction
            remarkFrontmatter,
            remarkMdxFrontmatter,
            // Custom plugin to export frontmatter, see src/lib/mdxFrontmatterExport.mjs
            mdxFrontmatterExport,
            // Unwrap images from p tags
            remarkUnwrapImages,
            // Github flavoured markdown
            remarkGfm,
        ],
        rehypePlugins: [rehypeSlug],
    },
})

export default withMDX(nextConfig)
