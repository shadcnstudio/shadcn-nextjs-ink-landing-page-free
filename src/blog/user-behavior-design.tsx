// Blog post data
export const userBehaviorDesignData = {
  id: 8,
  slug: 'user-behavior-design',
  title: 'Design Smarter: How User Behavior Shapes Winning Products',
  description: 'Learn how to discover what users truly want and build with confidence.',
  imageUrl: '/images/blog-post/post-1.webp',
  imageAlt: 'Design workspace with color swatches',
  date: 'March 12, 2025',
  category: 'Product',
  author: 'Phillip Palmer',
  avatarUrl: '/images/avatars/avatar-8.webp',
  readTime: 5,
  tags: ['User Experience', 'Product Design', 'User Research', 'Behavioral Design'],
  featured: false
}

// Blog post content component
export const UserBehaviorDesignContent = () => {
  const blogSections = [
    {
      id: 'design-smarter',
      icon: '🔍',
      iconSize: 'text-3xl',
      type: 'main-section',
      headingClass: 'blog-title',
      headingSize: 'text-2xl',
      title: 'The Psychology Behind Product Success',
      content: [
        "Great products aren't built on assumptions—they're built on deep understanding of how users actually behave. When we shift from guessing to knowing, design becomes a powerful tool for creating meaningful experiences."
      ],
      contentSize: 'text-xl'
    },
    {
      id: 'understanding-behavior',
      icon: '🧠',
      iconSize: 'text-2xl',
      type: 'sub-section',
      headingClass: 'blog-subtitle',
      headingSize: 'text-xl',
      title: 'Understanding User Behavior Through Data',
      content: [
        'User behavior tells us what people actually do, not what they say they do. This distinction is crucial for product teams who want to build experiences that truly resonate with their audience.',
        'By observing patterns in how users interact with products, we uncover insights that drive better design decisions and create more intuitive experiences.'
      ]
    },
    {
      id: 'research-methods',
      icon: '📊',
      iconSize: 'text-2xl',
      type: 'main-section',
      headingClass: 'blog-title',
      headingSize: 'text-xl',
      title: 'Research Methods That Matter',
      content: [
        'The most powerful insights come from combining different research methods to build a complete picture of user behavior and motivations.'
      ],
      subSections: [
        {
          id: 'behavioral-insights',
          type: 'bullet-section',
          headingClass: 'blog-subtitle',
          headingSize: 'text-xl',
          title: 'Key Behavioral Patterns to Consider',
          bulletPoints: [
            'Progressive disclosure - users scan before they read',
            'Satisficing behavior - users choose the first reasonable option',
            'Cognitive load - reduce choices to prevent decision fatigue',
            'Social proof - users look for signals from others'
          ],
          content: [
            'Understanding these patterns helps designers create interfaces that align with natural human behavior.'
          ]
        }
      ]
    },
    {
      id: 'data-driven-decisions',
      icon: '🧪',
      iconSize: 'text-2xl',
      type: 'main-section',
      headingClass: 'blog-title',
      headingSize: 'text-xl',
      title: 'Data-Driven Design Decisions',
      content: [
        'A/B testing and experimentation turn behavioral insights into validated improvements. The key is testing meaningful changes that align with user mental models.'
      ],
      subSections: [
        {
          id: 'testing-strategies',
          icon: '✅',
          iconSize: 'text-2xl',
          type: 'checklist-section',
          headingClass: 'blog-subtitle',
          headingSize: 'text-xl',
          title: 'Effective Testing Strategies',
          checklistItems: [
            'Test navigation patterns with task completion rates',
            'Optimize conversion flows through iterative improvements',
            'Validate content strategy with engagement metrics',
            'Measure feature adoption and user satisfaction',
            'Monitor support ticket trends for usability issues'
          ],
          content: ['Systematic testing reveals what actually works versus what we think should work.']
        }
      ]
    },
    {
      id: 'measuring-success',
      icon: '📈',
      iconSize: 'text-2xl',
      type: 'main-section',
      headingClass: 'blog-title',
      headingSize: 'text-xl',
      title: 'Measuring Behavioral Design Success',
      content: [
        "Success isn't just about increasing metrics—it's about creating experiences that align with user goals and business objectives."
      ],
      subSections: [
        {
          id: 'key-metrics',
          icon: '🎯',
          iconSize: 'text-2xl',
          type: 'sub-section',
          headingClass: 'blog-subtitle',
          headingSize: 'text-xl',
          title: 'Key Success Indicators',
          content: [
            'Task completion rates above 85% indicate strong usability. User satisfaction scores of 4.5+ out of 5 show genuine user value.',
            'Feature adoption rates of 40%+ for new features and 30%+ reduction in support tickets after improvements demonstrate real impact.'
          ]
        }
      ]
    },
    {
      id: 'building-empathy',
      icon: '❤️',
      iconSize: 'text-2xl',
      type: 'main-section',
      headingClass: 'blog-title',
      headingSize: 'text-xl',
      title: 'Building Empathy Through Data',
      content: [
        'Data without context is just numbers. The real power comes from combining behavioral insights with human understanding to build genuine empathy for user experiences.'
      ],
      subSections: [
        {
          id: 'empathy-practices',
          icon: '🤝',
          iconSize: 'text-2xl',
          type: 'sub-section',
          headingClass: 'blog-subtitle',
          headingSize: 'text-xl',
          title: 'Empathy-Building Practices',
          content: [
            'Create user journey maps that include emotional touchpoints and document user stories that connect behavior to motivations.',
            'Share user research findings across all team members and conduct regular user feedback sessions to maintain connection with real user needs.'
          ]
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
      title: 'From Insights to Impact',
      content: [
        'Understanding user behavior is just the beginning. The real impact comes from translating those insights into experiences that genuinely serve user needs while achieving business goals.',
        'When we design with behavioral insights, we create products that feel intuitive, reduce friction, and build lasting user satisfaction. The best products anticipate and guide behavior toward meaningful outcomes for everyone involved. 🚀'
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
