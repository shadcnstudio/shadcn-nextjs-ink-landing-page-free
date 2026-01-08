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
      type: 'main-section',
      headingClass: 'blog-title',
      headingSize: 'text-2xl',
      marginClass: 'mb-6',
      title: '🚀 Scaling Design the Right Way with a Solid Component System'
    },
    {
      id: 'long-term-growth',
      type: 'sub-section',
      headingClass: 'blog-subtitle',
      headingSize: 'text-xl',
      marginClass: 'mb-6',
      title: 'Long-Term Growth',
      content: [
        'Creating a product that can grow over time means preparing for constant change - new features, new layouts, shifting brand identity, and new team members. Without scalable foundations, even simple updates become slow, inconsistent, and frustrating.'
      ]
    },
    {
      id: 'why-it-matters',
      type: 'sub-section',
      headingClass: 'blog-subtitle',
      headingSize: 'text-xl',
      marginClass: 'mb-6',
      title: 'Why It Matters',
      content: [
        'A strong component system turns design chaos into clarity. It ensures teams move faster, maintain consistency, and ship polished experiences as the product evolves.'
      ]
    },
    {
      id: 'why-component-systems',
      type: 'main-section',
      headingClass: 'blog-title',
      headingSize: 'text-xl',
      spacingBetweenSections: 'mt-10',
      marginClass: 'mb-6',
      title: '🎯 Why Component Systems Matter',
      content: [
        'A component system is more than reusable UI elements; it is a shared language between design and engineering.'
      ],
      subSections: [
        {
          id: 'what-they-solve',
          type: 'bullet-section',
          headingClass: 'blog-subtitle',
          headingSize: 'text-xl',
          marginClass: 'mb-6',
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
      type: 'main-section',
      headingClass: 'blog-title',
      headingSize: 'text-xl',
      marginClass: 'mb-4',
      spacingBetweenSections: 'mt-16',
      title: '🌐 Collaborative Design: Bridging the Gap Between Teams',
      subSections: [
        {
          id: 'stronger-collaboration',
          type: 'sub-section',
          headingClass: 'blog-subtitle',
          headingSize: 'text-xl',
          marginClass: 'mb-4',
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
      type: 'main-section',
      headingClass: 'blog-title',
      headingSize: 'text-xl',
      marginClass: 'mb-6',
      title: '🛠️ The Power of Design Tokens in Your Workflow',
      subSections: [
        {
          id: 'visual-consistency',
          type: 'sub-section',
          headingClass: 'blog-subtitle',
          headingSize: 'text-xl',
          marginClass: 'mb-4',
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
      type: 'main-section',
      headingClass: 'blog-title',
      headingSize: 'text-xl',
      marginClass: 'mb-4',
      spacingBetweenSections: 'mt-12',
      title: 'Real Impact: What Teams Gain',
      content: ['When your component system becomes mature, results are visible everywhere:'],
      subSections: [
        {
          id: 'system-benefits',
          type: 'checklist-section',
          headingClass: 'blog-subtitle',
          headingSize: 'text-xl',
          marginClass: 'mb-4',
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
      type: 'main-section',
      headingClass: 'blog-title',
      headingSize: 'text-xl',
      marginClass: 'mb-6',
      spacingBetweenSections: 'mt-16',
      title: 'Conclusion: Scale with Intent, Not by Accident',
      content: [
        'A solid component system is the backbone of scalable design. With the right foundations, workflows, and rules, teams build faster, collaborate better, and keep the product visually aligned as it grows.',
        "You'll stop reinventing buttons — and start creating better product experiences. When the system scales right... your design scales forever. 🚀"
      ]
    }
  ]

  const renderSection = (section: any, sectionIndex: number) => (
    <section
      key={`section-${section.id}-${sectionIndex}`}
      id={section.id}
      className={` ${section.type === 'main-section' ? section.spacingBetweenSections || '' : ''}`}
    >
      {(section.icon || section.title) && (
        <div className='flex items-start gap-4'>
          {section.icon && <span className={section.iconSize || 'text-2xl'}>{section.icon}</span>}
          <div>
            <h2
              className={`${section.headingClass} text-foreground ${section.marginClass || ''} ${section.headingSize} font-semibold`}
            >
              {section.title}
            </h2>
            {section.content &&
              section.content.map((paragraph: string, index: number) => (
                <p
                  key={`content-${sectionIndex}-${index}`}
                  className={`text-muted-foreground text-xl ${section.contentSize ? `${section.contentSize} leading-relaxed` : `${section.marginClass || ''}`}`}
                >
                  {paragraph}
                </p>
              ))}
          </div>
        </div>
      )}

      {section.type === 'bullet-section' && !section.icon && (
        <>
          <h3
            className={`${section.headingClass} text-foreground ${section.marginClass || ''} ${section.headingSize} font-semibold`}
          >
            {section.title}
          </h3>
          <div className='space-y-4'>
            {section.bulletPoints?.map((point: string, index: number) => (
              <div key={`bullet-${sectionIndex}-${index}`} className='flex items-start gap-3'>
                <span className='text-muted-foreground'>•</span>
                <p className='text-muted-foreground text-xl'>{point}</p>
              </div>
            ))}
          </div>
          {section.content &&
            section.content.map((paragraph: string, index: number) => (
              <p key={`bullet-content-${sectionIndex}-${index}`} className='text-muted-foreground mt-6 text-xl'>
                {paragraph}
              </p>
            ))}
        </>
      )}

      {section.subSections?.map((subSection: any, subIndex: number) => (
        <section key={`subsection-${subSection.id}-${sectionIndex}-${subIndex}`} id={subSection.id} className={``}>
          {subSection.type === 'bullet-section' && !subSection.icon ? (
            <>
              <h3
                className={`${subSection.headingClass} text-foreground ${subSection.marginClass || ''} ${subSection.headingSize} font-semibold`}
              >
                {subSection.title}
              </h3>
              <div className='space-y-4'>
                {subSection.bulletPoints?.map((point: string, index: number) => (
                  <div key={`subbullet-${sectionIndex}-${subIndex}-${index}`} className='flex items-start gap-3'>
                    <span className='text-muted-foreground'>•</span>
                    <p className='text-muted-foreground text-xl'>{point}</p>
                  </div>
                ))}
              </div>
              {subSection.content &&
                subSection.content.map((paragraph: string, index: number) => (
                  <p
                    key={`subbullet-content-${sectionIndex}-${subIndex}-${index}`}
                    className='text-muted-foreground mt-6 text-xl'
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
                  className={`${subSection.headingClass} text-foreground mb-6 ${subSection.headingSize} font-semibold`}
                >
                  {subSection.title}
                </h3>

                {subSection.type === 'checklist-section' && subSection.checklistItems && (
                  <div className='space-y-3'>
                    {subSection.checklistItems.map((item: string, index: number) => (
                      <div key={`checklist-${sectionIndex}-${subIndex}-${index}`} className='flex items-start gap-3'>
                        <span className='text-blue-500'>✓</span>
                        <p className='text-muted-foreground text-xl'>{item}</p>
                      </div>
                    ))}
                  </div>
                )}

                {subSection.content &&
                  subSection.content.map((paragraph: string, index: number) => (
                    <p
                      key={`subcontent-${sectionIndex}-${subIndex}-${index}`}
                      className={`text-muted-foreground text-xl ${subSection.type === 'checklist-section' ? 'mt-4' : 'mb-4'}`}
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

  return <div className=''>{blogSections.map((section, index) => renderSection(section, index))}</div>
}
