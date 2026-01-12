'use client'

import { useEffect, useState } from 'react'

interface TocItem {
  id: string
  title: string
  level: number
  icon?: string
}

interface DynamicTocProps {
  contentContainerId?: string
}

export const DynamicToc = ({ contentContainerId = 'content' }: DynamicTocProps) => {
  const [tocItems, setTocItems] = useState<TocItem[]>([])

  useEffect(() => {
    const extractHeadings = () => {
      const container = document.getElementById(contentContainerId)

      if (!container) return []

      const headings = container.querySelectorAll('h2, h3')
      const items: TocItem[] = []

      headings.forEach(heading => {
        const element = heading as HTMLElement
        const title = element.textContent?.trim()

        if (!title) return

        // Create or use existing ID
        let id = element.id

        if (!id) {
          id = title
            .toLowerCase()
            .replace(/[^\\w\s-]/g, '')
            .replace(/\s+/g, '-')
          element.id = id
        }

        // Determine level based on tag name
        const level = element.tagName === 'H2' ? 2 : 3

        items.push({ id, title, level })
      })

      return items
    }

    // Extract headings after a short delay to ensure content is rendered
    const timer = setTimeout(() => {
      const items = extractHeadings()

      setTocItems(items)
    }, 100)

    return () => clearTimeout(timer)
  }, [contentContainerId])

  const handleClick = (id: string) => {
    const element = document.getElementById(id)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  if (tocItems.length === 0) {
    return null
  }

  // Group items: create structure where h2 items have their following h3 items
  const groupedItems: Array<{ main: TocItem; subs: TocItem[] }> = []
  let currentGroup: { main: TocItem; subs: TocItem[] } | null = null

  tocItems.forEach(item => {
    if (item.level === 2) {
      // This is a main title, start a new group
      if (currentGroup) {
        groupedItems.push(currentGroup)
      }

      currentGroup = { main: item, subs: [] }
    } else if (item.level === 3 && currentGroup) {
      // This is a subtitle, add to current group
      currentGroup.subs.push(item)
    }
  })

  // Don't forget the last group
  if (currentGroup) {
    groupedItems.push(currentGroup)
  }

  return (
    <div className='sticky top-24'>
      <h3 className='text-foreground mb-3.5 font-medium'>On This Page</h3>
      <nav>
        <ul className='space-y-3'>
          {groupedItems.map((group, groupIndex) => (
            <li key={`toc-group-${group.main.id}-${groupIndex}`}>
              <button
                onClick={() => handleClick(group.main.id)}
                className='text-muted-foreground hover:text-foreground flex items-start gap-2 text-left transition-colors'
              >
                <span className='bg-primary/40 mt-2.5 inline-block h-0.5 w-3 shrink-0'></span>
                <span>{group.main.title}</span>
              </button>

              {/* Nested subtitles */}
              {group.subs.length > 0 && (
                <ul className='mt-3 ml-5 space-y-3'>
                  {group.subs.map((subtitle, subIndex) => (
                    <li key={`toc-sub-${subtitle.id}-${groupIndex}-${subIndex}`}>
                      <button
                        onClick={() => handleClick(subtitle.id)}
                        className='text-muted-foreground hover:text-foreground flex items-start gap-2 text-left transition-colors'
                      >
                        <span className='bg-primary/40 mt-2.5 inline-block h-0.5 w-3 shrink-0'></span>
                        <span>{subtitle.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}
