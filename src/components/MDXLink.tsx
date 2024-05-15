import Link from 'next/link'

type MDXLinkProps = {
    href?: string
    children?: React.ReactNode
}

export default function MDXLink({ href, children }: MDXLinkProps) {
    // This is required because Next.js calls links with `_rsc` parameter at the end of the URL.
    // See https://github.com/vercel/next.js/discussions/58357
    if (href && href.startsWith('/') && href.endsWith('.pdf')) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        )
    }

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
