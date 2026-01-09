// Blog post data
export const empathyDrivenDesignData = {
  id: 2,
  slug: 'empathy-driven-design',
  title: 'Creating Products That Connect: The Power of Empathy in Design',
  description: 'Discover how understanding user emotions leads to better design decisions.',
  imageUrl: '/images/blog-post/post-3.webp',
  imageAlt: 'Empathy-driven design process',
  date: 'February 15, 2025',
  category: 'Design',
  author: 'Sarah Johnson',
  avatarUrl: '/images/avatars/avatar-2.webp',
  readTime: 6,
  tags: ['Empathy Design', 'User Psychology', 'Human-Centered Design', 'UX Research'],
  featured: false
}

// Blog post content component
export const EmpathyDrivenDesignContent = () => {
  const blogSections = [
    {
      id: 'creating-products',
      type: 'main-section',
      headingClass: 'blog-title',
      headingSize: 'text-2xl',
      marginClass: 'mb-6',
      title: '💝 Creating Products That Connect: The Power of Empathy in Design',
      content: [
        "Empathy is the cornerstone of great design. When we truly understand our users' emotions, frustrations, and aspirations, we create products that don't just function—they resonate deeply and create lasting connections."
      ],
      contentSize: 'text-xl'
    },
    {
      id: 'understanding-empathy',
      type: 'sub-section',
      headingClass: 'blog-subtitle',
      headingSize: 'text-xl',
      marginClass: 'mb-6',
      title: '🧠 Understanding Empathy in Design',
      content: [
        "Empathy in design goes beyond user research—it's about genuinely caring about the people who use your product. It means acknowledging their context, constraints, and emotions at every touchpoint.",
        "True empathetic design requires us to step outside our own assumptions and experience the world through our users' eyes, considering their diverse backgrounds and needs."
      ]
    },
    {
      id: 'empathy-methods',
      type: 'main-section',
      headingClass: 'blog-title',
      headingSize: 'text-xl',
      marginClass: 'mb-6',
      spacingBetweenSections: 'mt-10',
      title: '🔍 Methods for Building Empathy',
      content: [
        'Building empathy requires intentional methods and practices that help teams connect with users on a human level.'
      ],
      subSections: [
        {
          id: 'empathy-techniques',
          type: 'checklist-section',
          headingClass: 'blog-subtitle',
          headingSize: 'text-xl',
          marginClass: 'mb-6',
          title: '🔧 Core Empathy-Building Techniques',
          checklistItems: [
            'Deep Listening Sessions - Go beyond typical user interviews with open, unstructured conversations',
            "Walk in Their Shoes - Experience your product from the user's perspective and constraints",
            'Story Collection - Gather and share user stories that highlight emotional journeys',
            'Persona Development - Create rich, research-based personas including emotional states',
            'Contextual Observation - Watch users in their natural environment and workflow'
          ],
          content: [
            'These techniques help teams develop genuine understanding rather than surface-level user knowledge.'
          ]
        }
      ]
    },
    {
      id: 'emotional-journey',
      type: 'main-section',
      headingClass: 'blog-title',
      headingSize: 'text-xl',
      marginClass: 'mb-6',
      spacingBetweenSections: 'mt-16',
      title: '🗺️ Mapping the Emotional Journey',
      content: [
        'Every user interaction has an emotional dimension. Mapping these emotional states helps us identify opportunities to delight users and eliminate frustration points.'
      ],
      subSections: [
        {
          id: 'emotional-touchpoints',
          type: 'sub-section',
          headingClass: 'blog-subtitle',
          headingSize: 'text-xl',
          marginClass: 'mb-6',
          title: '💭 Key Emotional Touchpoints',
          content: [
            'First Impression: Curiosity, hope, or skepticism as users discover your product. This moment sets the tone for the entire relationship.',
            'Onboarding Experience: Confusion, excitement, or overwhelm during initial setup. Poor onboarding can destroy early enthusiasm.',
            'Feature Discovery: Delight in finding useful features or frustration with complexity. Progressive disclosure helps manage this journey.',
            'Problem Resolution: Anxiety when things go wrong, relief when problems are solved. How you handle errors defines user trust.',
            'Long-term Relationship: Trust, loyalty, or fatigue based on continued experiences. Sustained value builds lasting connections.'
          ]
        }
      ]
    },
    {
      id: 'inclusive-design',
      type: 'main-section',
      headingClass: 'blog-title',
      headingSize: 'text-xl',
      marginClass: 'mb-6',
      spacingBetweenSections: 'mt-16',
      title: '🌍 Inclusive Design Principles',
      content: [
        'Empathetic design is inherently inclusive. It requires us to consider the full spectrum of human diversity and create experiences that work for everyone.'
      ],
      subSections: [
        {
          id: 'inclusion-essentials',
          type: 'checklist-section',
          headingClass: 'blog-subtitle',
          headingSize: 'text-xl',
          marginClass: 'mb-6',
          title: '🤝 Inclusion Essentials',
          checklistItems: [
            'Accessibility First - Design for users with diverse abilities from the beginning',
            'Cultural Sensitivity - Consider cultural differences in communication and interaction patterns',
            'Economic Accessibility - Account for users with limited resources, slower internet, or older devices',
            'Cognitive Diversity - Design for different learning styles, attention spans, and processing preferences',
            'Multi-language Support - Ensure your product works across different languages and regions'
          ],
          content: ['True empathy means ensuring no one is excluded from accessing and benefiting from your product.']
        }
      ]
    },
    {
      id: 'empathy-in-teams',
      type: 'main-section',
      headingClass: 'blog-title',
      headingSize: 'text-xl',
      marginClass: 'mb-6',
      spacingBetweenSections: 'mt-16',
      title: '🤝 Building Empathy in Teams',
      content: [
        "Empathetic design isn't just the responsibility of UX designers—it requires the entire team to understand and care about user experiences."
      ],
      subSections: [
        {
          id: 'team-empathy-practices',
          type: 'bullet-section',
          headingClass: 'blog-subtitle',
          headingSize: 'text-xl',
          marginClass: 'mb-6',
          title: 'Core Team Practices',
          bulletPoints: [
            'Regular User Exposure - Include developers and stakeholders in user research sessions',
            'Shared Artifacts - Create user journey maps and personas that everyone can reference',
            'Empathy Workshops - Run exercises that help team members understand user perspectives',
            'User Story Integration - Include emotional context in feature requirements and user stories',
            'Cross-functional User Testing - Have different team roles observe user sessions'
          ],
          content: ['When the entire team develops empathy, user-centered decisions become natural rather than forced.']
        }
      ]
    },
    {
      id: 'measuring-empathy',
      type: 'main-section',
      headingClass: 'blog-title',
      headingSize: 'text-xl',
      marginClass: 'mb-6',
      spacingBetweenSections: 'mt-16',
      title: '📊 Measuring Empathetic Design',
      content: [
        'While empathy might seem unmeasurable, there are clear indicators that show when your design truly connects with users.'
      ],
      subSections: [
        {
          id: 'empathy-metrics',
          type: 'sub-section',
          headingClass: 'blog-subtitle',
          headingSize: 'text-xl',
          marginClass: 'mb-6',
          title: '📈 Success Indicators',
          content: [
            'User Satisfaction (NPS) scores of 50+ indicate strong emotional connection. Emotional Response Ratings of 4.5+ out of 5 show users feel understood.',
            'Support Ticket Sentiment trends positive when users feel heard. User Retention Rate of 70%+ at 6 months demonstrates lasting value.',
            'Qualitative indicators include users describing your product as "understanding their needs," positive emotional language in feedback, and organic recommendations to others facing similar challenges.'
          ]
        }
      ]
    },
    {
      id: 'empathy-challenges',
      icon: '⚡',
      iconSize: 'text-2xl',
      type: 'main-section',
      headingClass: 'blog-title',
      headingSize: 'text-xl',
      title: 'Overcoming Empathy Challenges',
      content: ['Building empathy in product development faces common obstacles that teams must actively address.'],
      subSections: [
        {
          id: 'common-barriers',
          type: 'bullet-section',
          headingClass: 'blog-subtitle',
          headingSize: 'text-xl',
          title: 'Key Barriers to Address',
          bulletPoints: [
            'Assumption bias - Teams thinking they know what users need without validation',
            'Technical constraints - Letting technical limitations override user needs',
            'Time pressure - Skipping user research due to tight deadlines',
            'Internal politics - Company goals conflicting with user goals',
            'Scale challenges - Maintaining empathy as user base grows and diversifies'
          ],
          content: [
            'Recognizing these barriers is the first step toward building more empathetic products and processes.'
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
      title: 'Empathy as Competitive Advantage',
      content: [
        'In a world of endless digital products, empathy becomes the differentiator. Products that truly understand and care about their users create lasting relationships that transcend features and functionality.',
        "Empathetic design isn't just about being nice—it's about being effective. When users feel understood, they become more engaged, more loyal, and more willing to grow with your product.",
        "The companies that invest in building deep empathy for their users will create the products that people don't just use—they love and advocate for. 💝"
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
