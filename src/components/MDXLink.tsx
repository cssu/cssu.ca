import Link from 'next/link'

type MDXLinkProps = {
    href?: string
    children?: React.ReactNode
}

export default function MDXLink({ href, children }: MDXLinkProps) {
    return href && (href.startsWith('/') || href.startsWith('.')) ? (
        <Link href={href}> {children} </Link>
    ) : (
        <a
            href={href}
            target={href?.startsWith('mailto:') ? '_self' : '_blank'}
            rel="noopener noreferrer"
        >
            {children}
        </a>
    )
}
