import React from 'react'

function nodeIsText(node: React.ReactNode): boolean {
    return typeof node === 'string' || typeof node === 'number'
}

export function hasOnlyTextChildren(children: React.ReactNode) {
    const childrenArray = React.Children.toArray(children)
    return childrenArray.every(nodeIsText)
}
