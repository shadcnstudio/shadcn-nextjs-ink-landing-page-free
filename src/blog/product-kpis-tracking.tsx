// Blog post data
export const productKPIsTrackingData = {
  id: 4,
  slug: 'product-kpis-tracking',
  title: 'Measure What Matters: Essential KPIs for Product Success',
  description: 'Focus on metrics that actually drive growth and user satisfaction.',
  imageUrl: '/images/blog-post/post-6.webp',
  imageAlt: 'Product analytics dashboard',
  date: 'May 22, 2025',
  category: 'Startup Growth',
  author: 'Emma Wilson',
  avatarUrl: '/images/avatars/avatar-4.webp',
  readTime: 5,
  tags: ['Product Analytics', 'KPIs', 'Growth Metrics', 'Data-Driven Decisions'],
  featured: false
}

// Blog post content component
export const ProductKPIsTrackingContent = () => {
  const blogSections = [
    {
      id: 'essential-kpis',
      icon: '📈',
      iconSize: 'text-3xl',
      type: 'main-section',
      headingClass: 'blog-title',
      headingSize: 'text-2xl',
      title: 'The Foundation of Product Analytics',
      content: [
        'Not all metrics are created equal. The key to product success lies in identifying and tracking the KPIs that truly drive growth, user satisfaction, and business outcomes.'
      ],
      contentSize: 'text-xl'
    },
    {
      id: 'why-kpis-matter',
      icon: '🎯',
      iconSize: 'text-2xl',
      type: 'sub-section',
      headingClass: 'blog-subtitle',
      headingSize: 'text-xl',
      title: 'Why the Right KPIs Matter',
      content: [
        'Tracking the wrong metrics can lead teams astray, while focusing on the right KPIs provides clarity, drives better decision-making, and aligns everyone toward common goals.',
        'The best product teams measure what directly impacts their users and business outcomes, not just vanity metrics that look good in reports.'
      ]
    },
    {
      id: 'acquisition-metrics',
      icon: '🎯',
      iconSize: 'text-2xl',
      type: 'main-section',
      headingClass: 'blog-title',
      headingSize: 'text-xl',
      title: 'Acquisition: Getting Users to Your Product',
      content: [
        'Acquisition metrics help you understand how effectively you attract new users and the cost of growth.'
      ],
      subSections: [
        {
          id: 'key-acquisition-kpis',
          icon: '📊',
          iconSize: 'text-2xl',
          type: 'checklist-section',
          headingClass: 'blog-subtitle',
          headingSize: 'text-xl',
          title: 'Key Acquisition KPIs',
          checklistItems: [
            'Customer Acquisition Cost (CAC) - What you spend to acquire each customer',
            'Conversion Rate - Percentage of visitors who become users',
            'Traffic Sources - Where your most valuable users come from',
            'Sign-up Rate - How many visitors create accounts',
            'Cost per Lead (CPL) - Investment required for each potential customer'
          ],
          content: ['Focus on sustainable acquisition channels that bring users who stick around and find real value.']
        }
      ]
    },
    {
      id: 'engagement-metrics',
      icon: '💡',
      iconSize: 'text-2xl',
      type: 'main-section',
      headingClass: 'blog-title',
      headingSize: 'text-xl',
      title: 'Engagement: Measuring User Activity',
      content: [
        'Engagement metrics reveal how actively users interact with your product and which features provide the most value.'
      ],
      subSections: [
        {
          id: 'core-engagement-kpis',
          icon: '⚡',
          iconSize: 'text-2xl',
          type: 'checklist-section',
          headingClass: 'blog-subtitle',
          headingSize: 'text-xl',
          title: 'Core Engagement KPIs',
          checklistItems: [
            'Daily/Monthly Active Users (DAU/MAU) - Regular usage patterns',
            'Session Duration - How long users spend in your product',
            'Feature Adoption Rate - Which features users actually use',
            'Time to Value - How quickly users experience benefits',
            'Engagement Score - Composite metric of user activity levels'
          ],
          content: ['High engagement indicates users find genuine value and are likely to become long-term customers.']
        }
      ]
    },
    {
      id: 'retention-metrics',
      icon: '🔄',
      iconSize: 'text-2xl',
      type: 'main-section',
      headingClass: 'blog-title',
      headingSize: 'text-xl',
      title: 'Retention: Keeping Users Coming Back',
      content: [
        'Retention metrics show whether users find lasting value in your product. Strong retention is the foundation of sustainable growth.'
      ],
      subSections: [
        {
          id: 'retention-kpi-essentials',
          icon: '🎯',
          iconSize: 'text-2xl',
          type: 'checklist-section',
          headingClass: 'blog-subtitle',
          headingSize: 'text-xl',
          title: 'Retention KPI Essentials',
          checklistItems: [
            'Churn Rate - Percentage of users who stop using your product',
            'Cohort Analysis - User behavior patterns over time',
            'Customer Lifetime Value (LTV) - Total value each user brings',
            'Retention Rate - Users who return after specific periods',
            'Repeat Usage - Frequency of return visits and actions'
          ],
          content: [
            'Improving retention is often more cost-effective than acquiring new users and indicates product-market fit.'
          ]
        }
      ]
    },
    {
      id: 'revenue-metrics',
      icon: '💰',
      iconSize: 'text-2xl',
      type: 'main-section',
      headingClass: 'blog-title',
      headingSize: 'text-xl',
      title: 'Revenue: Tracking Business Impact',
      content: [
        'Revenue metrics connect user behavior to business outcomes, helping teams understand the financial impact of product decisions.'
      ],
      subSections: [
        {
          id: 'revenue-tracking-essentials',
          icon: '📈',
          iconSize: 'text-2xl',
          type: 'checklist-section',
          headingClass: 'blog-subtitle',
          headingSize: 'text-xl',
          title: 'Revenue Tracking Essentials',
          checklistItems: [
            'Monthly/Annual Recurring Revenue (MRR/ARR) - Predictable income streams',
            'Average Revenue Per User (ARPU) - Revenue efficiency per customer',
            'Revenue Growth Rate - Business expansion velocity',
            'LTV to CAC Ratio - Profitability and sustainability indicator',
            'Gross Revenue Retention - Revenue maintained from existing customers'
          ],
          content: ['Balance growth metrics with profitability to build a sustainable business model.']
        }
      ]
    },
    {
      id: 'advanced-considerations',
      icon: '🔬',
      iconSize: 'text-2xl',
      type: 'main-section',
      headingClass: 'blog-title',
      headingSize: 'text-xl',
      title: 'Advanced KPI Considerations',
      content: [
        'Beyond basic metrics, sophisticated product teams track leading indicators and contextual data that predict future performance.'
      ],
      subSections: [
        {
          id: 'leading-indicators',
          type: 'bullet-section',
          headingClass: 'blog-subtitle',
          headingSize: 'text-xl',
          title: 'Leading vs Lagging Indicators',
          bulletPoints: [
            'Leading indicators predict future performance (user onboarding completion rates)',
            'Lagging indicators show past results (monthly revenue)',
            'Combine both for complete visibility into product health',
            'Use leading indicators to make proactive improvements'
          ],
          content: ['The best KPI strategies balance immediate insights with predictive intelligence.']
        }
      ]
    },
    {
      id: 'conclusion',
      icon: '🚀',
      iconSize: 'text-2xl',
      type: 'main-section',
      headingClass: 'blog-title',
      headingSize: 'text-xl',
      title: 'Building a Data-Driven Product Culture',
      content: [
        'Measuring what matters transforms how teams build products. When everyone understands which metrics drive success, decisions become clearer, priorities align, and products improve faster.',
        'Start with a few key metrics that directly impact your users and business goals. As your measurement capabilities mature, you can add sophistication and nuance to your tracking.',
        'Remember: the goal is not to track everything, but to track the right things that lead to meaningful action and better outcomes. 📊'
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
