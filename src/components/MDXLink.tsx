import Link from 'next/link'

type MDXLinkProps = {
    href?: string
    children?: React.ReactNode
}

export default function MDXLink({ href, children }: MDXLinkProps) {
    if (href && (href.startsWith('/') || href.startsWith('.'))) {
        return <Link href={href}> {children} </Link>
    }

    return (
        <a
            href={href}
            target={href?.startsWith('mailto:') || href?.startsWith('#') ? '_self' : '_blank'}
            rel="noopener noreferrer"
        >
            {children}
        </a>
    )
}
