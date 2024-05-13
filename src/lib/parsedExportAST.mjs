/**
 * Value obtained from:
 *
 * ```js
 * import AST from 'abstract-syntax-tree'
 * export const frontMatter = JSON.parse(\`${JSON.stringify(data)}\`)`
 * AST.parse(exportString) // returns the AST
 * ```
 *
 * This is required for optimization reasons. However, you may choose to use the
 * above code and it would be exactly identical to the code below, with the
 * value parameter as `JSON.stringify(data)`.
 */
export default function parsedExportAst(value) {
    return {
        type: 'Program',
        sourceType: 'module',
        body: [
            {
                type: 'ExportNamedDeclaration',
                declaration: {
                    type: 'VariableDeclaration',
                    kind: 'const',
                    declarations: [
                        {
                            type: 'VariableDeclarator',
                            id: { type: 'Identifier', name: 'frontMatter' },
                            init: {
                                type: 'CallExpression',
                                callee: {
                                    type: 'MemberExpression',
                                    object: { type: 'Identifier', name: 'JSON' },
                                    computed: false,
                                    property: { type: 'Identifier', name: 'parse' },
                                },
                                arguments: [
                                    {
                                        type: 'TemplateLiteral',
                                        expressions: [],
                                        quasis: [
                                            {
                                                type: 'TemplateElement',
                                                value: {
                                                    cooked: value,
                                                    raw: value,
                                                },
                                                tail: true,
                                            },
                                        ],
                                    },
                                ],
                            },
                        },
                    ],
                },
                specifiers: [],
                source: null,
            },
        ],
    }
}
