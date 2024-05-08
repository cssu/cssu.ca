import remarkGfm from "remark-gfm"
import remarkMdxImages from "remark-mdx-images"
import createMDX from "@next/mdx"

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Include markdown and MDX files
    pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
    // Optionally, add any other Next.js config below
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

// Merge MDX config with Next.js config
export default withMDX(nextConfig)
