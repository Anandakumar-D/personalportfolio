export interface BlogPost {
  id: string;
  title: string;
  description: string;
  content: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '5',
    title: 'Embeddings: The New Language of AI',
    description: 'A practical introduction to embeddings, their role in modern AI, and how they are transforming the way machines understand language and data.',
    content: `Read the full article on Medium: [Embeddings: The New Language of AI](https://medium.com/@Anandakumar_D/embeddings-the-new-language-of-ai-f6ecf1fe7ed5)`,
    publishedAt: '2024-04-20',
    readTime: '7 min read',
    tags: ['Embeddings', 'AI', 'NLP', 'Machine Learning']
  },
  {
    id: '6',
    title: 'Bridging the Gap: Understanding the Difference Between Insight and Information',
    description: 'A practical exploration of how true insight differs from raw information, and why this distinction matters for decision-making and AI.',
    content: `Read the full article on Medium: [Bridging the Gap: Understanding the Difference Between Insight and Information](https://medium.com/@Anandakumar_D/bridging-the-gap-understanding-the-difference-between-insight-and-information-c183f871b3e7)`,
    publishedAt: '2024-05-01',
    readTime: '6 min read',
    tags: ['Insight', 'Information', 'AI', 'Decision Making']
  },
  {
    id: '7',
    title: 'The Power of Self-Hosting: Building a Customized Data Stack Environment',
    description: 'A guide to the benefits and process of self-hosting your own data stack, with practical tips for building a tailored analytics environment.',
    content: `Read the full article on Medium: [The Power of Self-Hosting: Building a Customized Data Stack Environment](https://medium.com/@Anandakumar_D/the-power-of-self-hosting-building-a-customized-data-stack-environment-c2ddaa8f0134)`,
    publishedAt: '2024-05-10',
    readTime: '8 min read',
    tags: ['Self-Hosting', 'Data Stack', 'Analytics', 'Infrastructure']
  },
  {
    id: '8',
    title: 'The Rise of the Full-Stack Data Developer: Unifying Data Analysts, Data Engineers, and Data Scientists',
    description: 'Exploring the emergence of the full-stack data developer role and how it bridges the gap between analytics, engineering, and data science.',
    content: `Read the full article on Medium: [The Rise of the Full-Stack Data Developer: Unifying Data Analysts, Data Engineers, and Data Scientists](https://medium.com/@Anandakumar_D/the-rise-of-the-full-stack-data-developer-unifying-data-analysts-data-engineers-and-data-ebd1c3b476a4)`,
    publishedAt: '2024-05-15',
    readTime: '7 min read',
    tags: ['Full-Stack', 'Data Developer', 'Analytics', 'Data Science']
  },
  {
    id: '9',
    title: 'Evolution of Headless BI',
    description: 'A look at the rise of headless business intelligence platforms and how they are transforming data access and analytics.',
    content: `Read the full article on Medium: [Evolution of Headless BI](https://medium.com/@Anandakumar_D/evolution-of-headless-bi-7f75abccc43f)`,
    publishedAt: '2024-05-20',
    readTime: '6 min read',
    tags: ['Headless BI', 'Business Intelligence', 'Data Analytics', 'Platforms']
  },
  {
    id: '10',
    title: 'The Era of Real-Time Analytics',
    description: 'Exploring the shift towards real-time analytics and its impact on business intelligence, decision-making, and data infrastructure.',
    content: `Read the full article on Medium: [The Era of Real-Time Analytics](https://medium.com/@Anandakumar_D/the-era-of-real-time-analytics-e2351a41834f)`,
    publishedAt: '2024-05-25',
    readTime: '7 min read',
    tags: ['Real-Time Analytics', 'Business Intelligence', 'Data Infrastructure', 'Decision Making']
  }
];