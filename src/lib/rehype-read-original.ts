import { visit } from 'unist-util-visit'
import type { Root, Element } from 'hast'

function getTextContent(node: Element): string {
  let text = ''
  visit(node, 'text', (textNode: { value: string }) => {
    text += textNode.value
  })
  return text
}

export default function rehypeReadOriginal() {
  return (tree: Root) => {
    visit(tree, 'element', (node: Element) => {
      if (node.tagName !== 'a') return

      const text = getTextContent(node)
      if (!text.startsWith('Read the original article')) return

      const props = node.properties ?? {}
      props.className = ['read-original-btn']
      props.target = '_blank'
      props.rel = 'noopener noreferrer'
      node.properties = props

      // Replace text with "Read the original" and add external link SVG icon
      node.children = [
        { type: 'text', value: 'Read the original' },
        {
          type: 'element',
          tagName: 'svg',
          properties: {
            className: ['h-4', 'w-4'],
            fill: 'none',
            viewBox: '0 0 24 24',
            stroke: 'currentColor',
            strokeWidth: '2',
          },
          children: [
            {
              type: 'element',
              tagName: 'path',
              properties: {
                strokeLinecap: 'round',
                strokeLinejoin: 'round',
                d: 'M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25',
              },
              children: [],
            },
          ],
        },
      ]
    })
  }
}
