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
    id: '5',
    title: 'Autonomous AI for Multi-Pathology Detection in Chest X-Rays: A Multi-Site Study in the Indian Healthcare System',
    arxivLink: 'https://arxiv.org/abs/2504.00022',
    summary: 'This study presents an autonomous AI system for chest X-ray interpretation, trained on over 5 million X-rays from Indian healthcare systems. The AI integrates Vision Transformers, Faster R-CNN, and advanced U-Net models to classify, detect, and segment 75 pathologies. It achieved up to 98% precision and over 95% recall, and was deployed across 17 major healthcare systems in India, processing over 150,000 scans and improving diagnostic accuracy and reporting times.',
    modalities: ['X-ray'],
    focus: ['Classification', 'Detection', 'Segmentation', 'Vision Transformers', 'Clinical Deployment'],
    year: 2025
  },
  {
    id: '6',
    title: 'Vision-Language Models for Acute Tuberculosis Diagnosis: A Multimodal Approach Combining Imaging and Clinical Data',
    arxivLink: 'https://arxiv.org/abs/2503.14538',
    summary: 'This study introduces a Vision-Language Model (VLM) leveraging SIGLIP and Gemma-3b architectures for automated acute tuberculosis (TB) screening. By integrating chest X-ray images and clinical notes, the model enhances diagnostic accuracy and efficiency, especially in resource-limited settings. The VLM demonstrated high precision (97%) and recall (96%) in detecting key TB pathologies, and its multimodal capability reduces reliance on radiologists, providing a scalable solution for acute TB screening.',
    modalities: ['X-ray', 'Clinical Data'],
    focus: ['Vision-Language Models', 'Tuberculosis Diagnosis', 'Multimodal AI'],
    year: 2025
  },
  {
    id: '7',
    title: 'AI-Driven MRI Spine Pathology Detection: A Comprehensive Deep Learning Approach for Automated Diagnosis in Diverse Clinical Settings',
    arxivLink: 'https://arxiv.org/abs/2503.20316',
    summary: 'This study presents an autonomous AI system for MRI spine pathology detection, trained on 2 million MRI spine scans from diverse Indian healthcare facilities. The system integrates Vision Transformers, U-Net with cross-attention, MedSAM, and Cascade R-CNN for classification, segmentation, and detection of 43 spinal pathologies. It achieved up to 97.9% detection accuracy and was deployed across 13 major healthcare enterprises, processing over 100,000 scans and improving diagnostic efficiency.',
    modalities: ['MRI'],
    focus: ['Spine Pathology Detection', 'Deep Learning', 'Clinical Deployment'],
    year: 2025
  },
  {
    id: '8',
    title: 'Advancing Chronic Tuberculosis Diagnostics Using Vision-Language Models: A Multimodal Framework for Precision Analysis',
    arxivLink: 'https://arxiv.org/abs/2503.14536',
    summary: 'This study proposes a Vision-Language Model (VLM) leveraging SIGLIP and Gemma-3b architectures to enhance automated chronic tuberculosis (TB) screening. By integrating chest X-ray images with clinical data, the model improves diagnostic consistency and accessibility, especially in resource-constrained settings. The VLM achieved high precision (94%) and recall (94%) for detecting key chronic TB pathologies, and offers a robust, scalable solution for automated chronic TB diagnosis.',
    modalities: ['X-ray', 'Clinical Data'],
    focus: ['Vision-Language Models', 'Chronic Tuberculosis', 'Multimodal AI'],
    year: 2025
  },
  {
    id: '10',
    title: '3D Convolutional Neural Networks for Improved Detection of Intracranial bleeding in CT Imaging',
    arxivLink: 'https://arxiv.org/abs/2503.20306',
    summary: 'This paper presents a U-shaped 3D Convolutional Neural Network (CNN) for automating the detection and classification of intracranial bleeding (IB) in volumetric CT scans. The model achieved high precision and recall across major bleed types, improving diagnostic speed and accuracy in emergency care settings.',
    modalities: ['CT'],
    focus: ['3D CNN', 'Intracranial Bleeding', 'Emergency Diagnostics'],
    year: 2025
  },
  {
    id: '11',
    title: 'A Multi-Site Study on AI-Driven Pathology Detection and Osteoarthritis Grading from Knee X-Ray',
    arxivLink: 'https://arxiv.org/abs/2503.22176',
    summary: 'This study presents an AI-powered system that analyzes knee X-rays to detect key pathologies and grade osteoarthritis severity. Using 1.3 million knee X-rays from a multi-site Indian clinical trial, the system achieved strong diagnostic accuracy and generalizability across diverse imaging environments, enabling timely, personalized treatment and transforming bone health management.',
    modalities: ['X-ray'],
    focus: ['Pathology Detection', 'Osteoarthritis Grading', 'AI Diagnostics'],
    year: 2025
  },
  {
    id: '12',
    title: 'AI and Deep Learning for Automated Segmentation and Quantitative Measurement of Spinal Structures in MRI',
    arxivLink: 'https://arxiv.org/abs/2503.11281',
    summary: 'This study develops an autonomous AI system for segmenting and measuring key spinal structures in MRI scans, focusing on intervertebral disc height and spinal canal diameter. The model leverages deep learning architectures and achieved high segmentation accuracy, improving diagnostic consistency and reducing clinician workload in spinal assessments.',
    modalities: ['MRI'],
    focus: ['Segmentation', 'Quantitative Measurement', 'Spinal Structures'],
    year: 2025
  },
  {
    id: '13',
    title: 'Deep Learning-Based Automated Workflow for Accurate Segmentation and Measurement of Abdominal Organs in CT Scans',
    arxivLink: 'https://arxiv.org/abs/2503.10717',
    summary: 'This study develops and validates an automated workflow for segmentation and measurement of abdominal organs in CT scans using advanced deep learning models. The workflow achieved high precision and recall for organs such as kidneys, liver, spleen, and prostate, improving measurement accuracy and consistency in clinical evaluations.',
    modalities: ['CT'],
    focus: ['Segmentation', 'Abdominal Organs', 'Deep Learning'],
    year: 2025
  }
];