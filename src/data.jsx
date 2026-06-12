export const services = [
  {
    title: 'Parent Coaching',
    lead: 'Helping parents:',
    accent: '#2d5a86',
    iconBg: '#e3ecf3',
    icon: (
      <span
        style={{
          width: 18,
          height: 18,
          borderRadius: '50%',
          border: '3px solid #2d5a86',
        }}
      />
    ),
    items: [
      'Build stronger relationships with their children',
      'Improve communication',
      'Manage parenting stress',
      'Navigate behavioral challenges',
      'Raise emotionally resilient children',
    ],
  },
  {
    title: 'Youth Wellness Coaching',
    lead: 'Helping young people:',
    accent: '#4d93a6',
    iconBg: '#e1eef1',
    icon: (
      <span
        style={{
          width: 18,
          height: 18,
          borderRadius: '50%',
          background: '#6ea7b8',
        }}
      />
    ),
    items: [
      'Build confidence and self-esteem',
      'Manage stress and anxiety',
      'Develop healthy coping strategies',
      'Improve emotional intelligence',
      'Strengthen decision-making skills',
    ],
  },
  {
    title: 'School & PTA Workshops',
    lead: 'Topics include:',
    iconBg: '#f5e6da',
    icon: (
      <span
        style={{
          width: 16,
          height: 16,
          background: '#d98e5f',
          transform: 'rotate(45deg)',
        }}
      />
    ),
    tags: [
      'Mental Wellness for Students',
      'Positive Parenting Strategies',
      'Bullying Prevention',
      'Building Resilient Children',
      'Digital Wellness & Social Media',
      'Stress Management for Families',
    ],
  },
  {
    title: 'Family Wellness Programs',
    lead: 'Bringing the whole family together:',
    accent: '#2d5a86',
    iconBg: '#e3ecf3',
    icon: (
      <span style={{ position: 'relative', width: 22, height: 16, display: 'inline-block' }}>
        <span
          style={{
            position: 'absolute',
            left: 0,
            top: 1,
            width: 14,
            height: 14,
            borderRadius: '50%',
            border: '3px solid #2d5a86',
          }}
        />
        <span
          style={{
            position: 'absolute',
            right: 0,
            top: 1,
            width: 14,
            height: 14,
            borderRadius: '50%',
            border: '3px solid #d98e5f',
          }}
        />
      </span>
    ),
    items: [
      'Family communication coaching',
      'Conflict resolution strategies',
      'Emotional wellness education',
      'Family goal-setting workshops',
    ],
  },
]

export const steps = [
  {
    num: '01',
    color: '#d98e5f',
    title: 'Reach out',
    body: 'Call or email Mary to share what your family is navigating. No pressure, no jargon — just a conversation.',
  },
  {
    num: '02',
    color: '#2d5a86',
    title: 'A free intro call',
    body: 'We talk through your goals and figure out which coaching, workshop, or program is the right fit.',
  },
  {
    num: '03',
    color: '#6ea7b8',
    title: 'A plan that fits',
    body: 'You get practical tools and ongoing support, tailored to your family — at a pace that works for you.',
  },
]
