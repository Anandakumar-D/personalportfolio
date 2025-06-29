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
  }
];