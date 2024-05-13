import { lstatSync, readdirSync } from 'fs'

import matter from 'gray-matter'

import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const sitemap = []

    for (const subDirectory of readdirSync('./content')) {
        const subDirectoryPath = `./content/${subDirectory}`

        const isSubdirectory = lstatSync(subDirectoryPath).isDirectory()
        if (isSubdirectory && readdirSync(subDirectoryPath).includes('index.mdx')) {
            const { data: frontMatter } = matter.read(`${subDirectoryPath}/index.mdx`)
            sitemap.push({
                url: `https://cssu.ca/${subDirectory}`,
                lastModified: new Date(frontMatter.lastModified || frontMatter.date),
                // A note about changeFrequency: Google mostly ignores this field,
                // don't stress much about it.
                // https://webmasters.stackexchange.com/
                // questions/25833/
                // does-google-penalize-daily-updated-lastmod-tags-in-sitemaps-if-the-data-is-not
                //
                // Also see:
                // https://webmasters.stackexchange.com/
                // questions/20735/how-to-choose-the-changefreq-value-in-an-xml-sitemap
                changeFrequency: frontMatter.changeFrequency || 'monthly',
                priority: frontMatter.priority || 0.8, // 0.8 because it's a root page
            })
        } else if (isSubdirectory) {
            // Nestedly read the subdirectories
            let lastLastModified = new Date(0)
            for (const subSubDirectory of readdirSync(subDirectoryPath)) {
                const subSubDirectoryPath = `${subDirectoryPath}/${subSubDirectory}`
                const isSubSubdirectory = lstatSync(subSubDirectoryPath).isDirectory()
                if (isSubSubdirectory && readdirSync(subSubDirectoryPath).includes('index.mdx')) {
                    const { data: frontMatter } = matter.read(`${subSubDirectoryPath}/index.mdx`)
                    const lastModified = new Date(frontMatter.lastModified || frontMatter.date)

                    if (lastModified.getTime() > lastLastModified.getTime()) {
                        lastLastModified = lastModified
                    }

                    sitemap.push({
                        url: `https://cssu.ca/${subDirectory}/${subSubDirectory}`,
                        lastModified: new Date(frontMatter.lastModified || frontMatter.date),
                        changeFrequency: frontMatter.changeFrequency || 'monthly',
                        priority: frontMatter.priority || 0.5, // 0.5 because it's a sub-sub page
                    })
                }
            }
            // Now, we have the last modified date of all the sub-sub pages. We can return
            // the last modified date of the original subdirectory.
            // Also, notice that:
            // "You don't have to worry about the order of the URLs in your sitemap,
            // it doesn't matter to Google."
            // - https://developers.google.com/search/docs/
            // crawling-indexing/sitemaps/build-sitemap
            sitemap.push({
                url: `https://cssu.ca/${subDirectory}`,
                lastModified: lastLastModified,
                // Posts or events are usually added ~weekly
                changeFrequency: 'weekly',
                priority: 0.8, // 0.8 because it's a sub page
            })
        }
    }

    return sitemap
}
