import { join } from 'path'

import Figure from '#/Figure'
import ProfileCard from '#/ProfileCard'
import ProfileContainer from '#/ProfileContainer'
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
        ProfileContainer: ProfileContainer,
    } as MDXComponents
}

export function getComponentsRequiringPath(pagePathOrMdxFolderPath: string) {
    return {
        Figure: (props: any) => (
            <Figure
                {...props}
            />
        ),
        ProfileCard: (props: any) => {
            return (
                <ProfileCard
                    {...props}
                />
            )
        },
        img: ({ src, alt }: { src?: string; alt?: string }) => (
            <MDXImage src={src} alt={alt} />
        ),
    } as MDXComponents
}
