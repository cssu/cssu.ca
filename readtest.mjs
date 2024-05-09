import { readdirSync, readFileSync } from "fs"
import { join } from "path"
// import { serialize } from "next-mdx-remote/serialize"

async function readMdxFiles() {
    let files = []

    const dir = "./content/events/"

    for (const subdirectory of readdirSync(dir)) {
        const subDirPath = join(process.cwd(), dir, subdirectory)

        for (const file of readdirSync(subDirPath)) {
            const filePath = join(subDirPath, file)
            // if file is .mdx
            if (filePath.endsWith(".mdx")) {
                const content = readFileSync(filePath, "utf8")
                const mdxSource = await serialize(content, { parseFrontmatter: true })
                files.push(mdxSource)
            }
        }
    }

    return files
}

console.log(__dirname)

// readMdxFiles().then(console.log)

// console.log(process.cwd())

// readMdxFiles().then(async files => {
//     for (const file of files) {
//         const content = await readFile(file, "utf8")
//         const mdxSource = await serialize(content)
//         console.log(mdxSource)
//     }
// })
