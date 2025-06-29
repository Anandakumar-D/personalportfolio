export interface Publication {
  id: string;
  title: string;
  arxivLink: string;
  summary: string;
  modalities: string[];
  focus: string[];
  year: number;
}

export const publications: Publication[] = [
  {
    id: '1',
    title: 'Deep Learning for Automated Chest X-ray Analysis: A Comprehensive Evaluation Framework',
    arxivLink: 'https://arxiv.org/abs/2301.00000',
    summary: 'A comprehensive evaluation framework for deep learning models in chest X-ray analysis, addressing clinical deployment challenges and bias mitigation strategies.',
    modalities: ['X-ray'],
    focus: ['Classification', 'Evaluation'],
    year: 2024
  },
  {
    id: '2',
    title: 'Vision-Language Models for Radiology Report Generation: Bridging Visual Understanding and Clinical Reasoning',
    arxivLink: 'https://arxiv.org/abs/2302.00000',
    summary: 'Novel approach to automated radiology report generation using vision-language models, achieving state-of-the-art performance on multiple datasets.',
    modalities: ['X-ray', 'CT', 'MRI'],
    focus: ['VLM', 'Report Generation'],
    year: 2024
  },
  {
    id: '3',
    title: 'Robust Medical Image Segmentation with Uncertainty Quantification for Clinical Decision Support',
    arxivLink: 'https://arxiv.org/abs/2303.00000',
    summary: 'Advanced segmentation techniques with uncertainty quantification for improved clinical decision-making in medical imaging applications.',
    modalities: ['MRI', 'CT'],
    focus: ['Segmentation', 'Uncertainty'],
    year: 2023
  },
  {
    id: '4',
    title: 'Bias Detection and Mitigation in AI-Powered Medical Imaging Systems',
    arxivLink: 'https://arxiv.org/abs/2304.00000',
    summary: 'Comprehensive analysis of bias sources in medical AI systems with practical mitigation strategies for fair and equitable healthcare applications.',
    modalities: ['X-ray', 'CT', 'MRI'],
    focus: ['Bias Mitigation', 'Fairness'],
    year: 2023
  }
];