import { join } from 'path'

import CouncilSectionContainer from '@/components/mdx/CouncilSectionContainer'
import Figure from '#/Figure'
import ProfileCard from '#/ProfileCard'
import ProfileContainer from '#/ProfileContainer'
import Selector from '#/Selector'
import MDXImage from '@/components/MDXImage'
import MDXLink from '@/components/MDXLink'

import type { MDXComponents } from 'mdx/types'

export default function getMDXComponents(): MDXComponents {
    return {
        a: ({ children, href }: { children: React.ReactNode; href: string }) => (
            <MDXLink href={href}>{children}</MDXLink>
        ),
        table: ({ children }: { children: React.ReactNode }) => (
            <div className="overflow-scroll">
                <table>{children}</table>
            </div>
        ),
        ProfileCard: ProfileCard,
        ProfileContainer: ProfileContainer,
        CouncilSectionContainer: CouncilSectionContainer,
        Selector: Selector,
    } as MDXComponents
}

export function getComponentsRequiringPath(pagePathOrMdxFolderPath: string) {
    const overridenMDXFolderPath = pagePathOrMdxFolderPath.startsWith(process.cwd())
        ? pagePathOrMdxFolderPath
        : join(process.cwd(), 'content', pagePathOrMdxFolderPath)

    return {
        Figure: (props: any) => (
            <Figure
                {...props}
                overriddenMDXFolderPath={props.overriddenMDXFolderPath || overridenMDXFolderPath}
            />
        ),
        ProfileCard: (props: any) => {
            return (
                <ProfileCard
                    {...props}
                    overriddenMDXFolderPath={
                        props.overriddenMDXFolderPath || overridenMDXFolderPath
                    }
                />
            )
        },
        img: ({ src, alt }: { src?: string; alt?: string }) => (
            <MDXImage src={src} alt={alt} mdxFolderPath={overridenMDXFolderPath} />
        ),
    } as MDXComponents
}
