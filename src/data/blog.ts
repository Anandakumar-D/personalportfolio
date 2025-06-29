export interface BlogPost {
  id: string;
  title: string;
  description: string;
  link: string;
  publishedAt: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Teaching LLMs to Write Radiology Reports',
    description: 'Exploring the challenges and breakthroughs in training large language models to generate clinically accurate radiology reports.',
    link: 'https://medium.com/@anandkumar/teaching-llms-radiology-reports',
    publishedAt: '2024-02-15'
  },
  {
    id: '2',
    title: 'Scaling Radiology AI in Hospitals',
    description: 'Real-world insights from deploying AI systems in clinical environments and overcoming infrastructure challenges.',
    link: 'https://medium.com/@anandkumar/scaling-radiology-ai-hospitals',
    publishedAt: '2024-01-28'
  },
  {
    id: '3',
    title: 'Prompt Engineering for Clinical Models',
    description: 'Advanced techniques for optimizing prompts in medical AI applications to ensure reliable and accurate outputs.',
    link: 'https://medium.com/@anandkumar/prompt-engineering-clinical-models',
    publishedAt: '2024-01-10'
  },
  {
    id: '4',
    title: 'The Future of AI in Medical Imaging',
    description: 'Exploring emerging trends, challenges, and opportunities in the intersection of artificial intelligence and medical imaging.',
    link: 'https://medium.com/@anandkumar/future-ai-medical-imaging',
    publishedAt: '2023-12-20'
  }
];