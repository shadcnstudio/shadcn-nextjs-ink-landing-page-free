// Blog post data
export const componentSystemDesignData = {
  id: 7,
  slug: 'scaling-design-component-system',
  title: 'Scaling Design the Right Way with a Solid Component System',
  description: 'Build consistency, save time, and ship optimized UI every release.',
  imageUrl: '/images/blog-post/post-4.webp',
  imageAlt: 'Component design system',
  date: 'March 05, 2025',
  category: 'Design',
  author: 'Dylan Field',
  avatarUrl: '/images/avatars/avatar-7.webp',
  readTime: 4,
  tags: ['Design System', 'UI/UX', 'Component Library', 'Scalability'],
  featured: false
}

// Blog post content component
export const ComponentSystemDesignContent = () => {
  const blogSections = [
    {
      id: 'scaling-design',
      icon: '🚀',
      iconSize: 'text-3xl',
      type: 'main-section',
      headingClass: 'blog-title',
      headingSize: 'text-2xl',
      title: 'Design Systems at Scale',
      content: [
        "Building products shouldn't mean reinventing interfaces over and over again. When teams create consistent, reusable foundations, great design spreads faster, feels more coherent, and drives exponential impact."
      ],
      contentSize: 'text-xl'
    },
    {
      id: 'long-term-growth',
      icon: '📈',
      iconSize: 'text-2xl',
      type: 'sub-section',
      headingClass: 'blog-subtitle',
      headingSize: 'text-xl',
      title: 'Long-Term Growth',
      content: [
        'Creating a product that can grow over time means preparing for constant change - new features, new layouts, shifting brand identity, and new team members. Without scalable foundations, even simple updates become slow, inconsistent, and frustrating.'
      ]
    },
    {
      id: 'why-it-matters',
      icon: '🌐',
      iconSize: 'text-2xl',
      type: 'sub-section',
      headingClass: 'blog-subtitle',
      headingSize: 'text-xl',
      title: 'Why It Matters',
      content: [
        'A strong component system turns design chaos into clarity. It ensures teams move faster, maintain consistency, and ship polished experiences as the product evolves.'
      ]
    },
    {
      id: 'why-component-systems',
      icon: '❤️',
      iconSize: 'text-2xl',
      type: 'main-section',
      headingClass: 'blog-title',
      headingSize: 'text-xl',
      title: 'Why Component Systems Matter',
      content: [
        'A component system is more than reusable UI elements; it is a shared language between design and engineering.'
      ],
      subSections: [
        {
          id: 'what-they-solve',
          type: 'bullet-section',
          headingClass: 'blog-subtitle',
          headingSize: 'text-xl',
          title: 'What They Solve',
          bulletPoints: [
            'Inconsistency across pages and flows',
            'Slower development due to repeated work',
            'Design → dev handoff and communication gaps',
            'Hard-to-manage UI updates as products grow'
          ],
          content: [
            'A strong system ensures every feature shipped feels like it belongs — clean, coherent, and on-brand.'
          ]
        }
      ]
    },
    {
      id: 'collaborative-design',
      icon: '🌐',
      iconSize: 'text-2xl',
      type: 'main-section',
      headingClass: 'blog-title',
      headingSize: 'text-xl',
      title: 'Collaborative Design: Bridging the Gap Between Teams',
      subSections: [
        {
          id: 'stronger-collaboration',
          icon: '💪',
          iconSize: 'text-2xl',
          type: 'sub-section',
          headingClass: 'blog-subtitle',
          headingSize: 'text-xl',
          title: 'Stronger Collaboration',
          content: [
            'Strong design-development collaboration is essential for speed and quality. Shared tools, open communication, and clear standards reduce friction and help teams deliver better outcomes.',
            "When both sides understand each other's language, the product benefits — smoother workflows, fewer revisions, and stronger alignment on the final vision."
          ]
        }
      ]
    },
    {
      id: 'design-tokens',
      icon: '🛠️',
      iconSize: 'text-2xl',
      type: 'main-section',
      headingClass: 'blog-title',
      headingSize: 'text-xl',
      title: 'The Power of Design Tokens in Your Workflow',
      subSections: [
        {
          id: 'visual-consistency',
          icon: '👀',
          iconSize: 'text-2xl',
          type: 'sub-section',
          headingClass: 'blog-subtitle',
          headingSize: 'text-xl',
          title: 'Visual Consistency',
          content: [
            "Design tokens are the visual design atoms of the product, representing values such as spacing, colors, and typography. They allow teams to create a cohesive design language across platforms, ensuring that every pixel aligns with the brand's identity.",
            'By integrating design tokens into your development process, you can automate updates and maintain consistency, making it easier to adapt to changes in design.'
          ]
        }
      ]
    },
    {
      id: 'real-impact',
      icon: '💡',
      iconSize: 'text-2xl',
      type: 'main-section',
      headingClass: 'blog-title',
      headingSize: 'text-xl',
      title: 'Real Impact: What Teams Gain',
      content: ['When your component system becomes mature, results are visible everywhere:'],
      subSections: [
        {
          id: 'system-benefits',
          icon: '🏆',
          iconSize: 'text-2xl',
          type: 'checklist-section',
          headingClass: 'blog-subtitle',
          headingSize: 'text-xl',
          title: 'System Benefits',
          checklistItems: [
            'Design velocity increases by 2x–10x',
            'UI consistency becomes natural — not enforced',
            'New team members onboard faster',
            'Code and design debt shrink dramatically',
            'Brand identity stays intact across touchpoints'
          ],
          content: ['It transforms how teams deliver — from firefighting to innovating.']
        }
      ]
    },
    {
      id: 'conclusion',
      icon: '🎯',
      iconSize: 'text-2xl',
      type: 'main-section',
      headingClass: 'blog-title',
      headingSize: 'text-xl',
      title: 'Conclusion: Scale with Intent, Not by Accident',
      content: [
        'A solid component system is the backbone of scalable design. With the right foundations, workflows, and rules, teams build faster, collaborate better, and keep the product visually aligned as it grows.',
        "You'll stop reinventing buttons — and start creating better product experiences. When the system scales right... your design scales forever. 🚀"
      ]
    }
  ]

  const renderSection = (section: any, sectionIndex: number) => (
    <section key={`section-${section.id}-${sectionIndex}`} id={section.id} className='space-y-6'>
      {(section.icon || section.title) && (
        <div className='flex items-start gap-4'>
          {section.icon && <span className={section.iconSize || 'text-2xl'}>{section.icon}</span>}
          <div>
            <h2 className={`${section.headingClass} text-foreground mb-4 ${section.headingSize} font-semibold`}>
              {section.title}
            </h2>
            {section.content &&
              section.content.map((paragraph: string, index: number) => (
                <p
                  key={`content-${sectionIndex}-${index}`}
                  className={`text-muted-foreground ${section.contentSize ? `${section.contentSize} leading-relaxed` : 'mb-4'}`}
                >
                  {paragraph}
                </p>
              ))}
          </div>
        </div>
      )}

      {section.type === 'bullet-section' && !section.icon && (
        <>
          <h3 className={`${section.headingClass} text-foreground mb-4 ${section.headingSize} font-semibold`}>
            {section.title}
          </h3>
          <div className='space-y-4'>
            {section.bulletPoints?.map((point: string, index: number) => (
              <div key={`bullet-${sectionIndex}-${index}`} className='flex items-start gap-3'>
                <span className='text-muted-foreground'>•</span>
                <p className='text-muted-foreground'>{point}</p>
              </div>
            ))}
          </div>
          {section.content &&
            section.content.map((paragraph: string, index: number) => (
              <p key={`bullet-content-${sectionIndex}-${index}`} className='text-muted-foreground mt-4'>
                {paragraph}
              </p>
            ))}
        </>
      )}

      {section.subSections?.map((subSection: any, subIndex: number) => (
        <section
          key={`subsection-${subSection.id}-${sectionIndex}-${subIndex}`}
          id={subSection.id}
          className='space-y-6'
        >
          {subSection.type === 'bullet-section' && !subSection.icon ? (
            <>
              <h3 className={`${subSection.headingClass} text-foreground mb-4 ${subSection.headingSize} font-semibold`}>
                {subSection.title}
              </h3>
              <div className='space-y-4'>
                {subSection.bulletPoints?.map((point: string, index: number) => (
                  <div key={`subbullet-${sectionIndex}-${subIndex}-${index}`} className='flex items-start gap-3'>
                    <span className='text-muted-foreground'>•</span>
                    <p className='text-muted-foreground'>{point}</p>
                  </div>
                ))}
              </div>
              {subSection.content &&
                subSection.content.map((paragraph: string, index: number) => (
                  <p
                    key={`subbullet-content-${sectionIndex}-${subIndex}-${index}`}
                    className='text-muted-foreground mt-4'
                  >
                    {paragraph}
                  </p>
                ))}
            </>
          ) : (
            <div className='flex items-start gap-4'>
              {subSection.icon && <span className={subSection.iconSize || 'text-2xl'}>{subSection.icon}</span>}
              <div>
                <h3
                  className={`${subSection.headingClass} text-foreground mb-4 ${subSection.headingSize} font-semibold`}
                >
                  {subSection.title}
                </h3>

                {subSection.type === 'checklist-section' && subSection.checklistItems && (
                  <div className='space-y-3'>
                    {subSection.checklistItems.map((item: string, index: number) => (
                      <div key={`checklist-${sectionIndex}-${subIndex}-${index}`} className='flex items-start gap-3'>
                        <span className='text-blue-500'>✓</span>
                        <p className='text-muted-foreground'>{item}</p>
                      </div>
                    ))}
                  </div>
                )}

                {subSection.content &&
                  subSection.content.map((paragraph: string, index: number) => (
                    <p
                      key={`subcontent-${sectionIndex}-${subIndex}-${index}`}
                      className={`text-muted-foreground ${subSection.type === 'checklist-section' ? 'mt-4' : 'mb-4'}`}
                    >
                      {paragraph}
                    </p>
                  ))}
              </div>
            </div>
          )}
        </section>
      ))}
    </section>
  )

  return <div className='space-y-12'>{blogSections.map((section, index) => renderSection(section, index))}</div>
}
