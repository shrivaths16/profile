import {
  SiPython, SiJavascript, SiHtml5, SiCss3, SiCplusplus,
  SiPandas, SiPytorch, SiJenkins, SiGit, SiPostman, SiFastapi, SiReact, 
  SiNginx, SiLinux, SiTypescript, SiNodedotjs, SiDocker, SiTailwindcss, SiNextdotjs,
  SiPm2, SiApache, SiGnubash, SiNumpy, SiTensorflow, SiPlotly,
  SiTerraform, SiLangchain
} from 'react-icons/si';

// Add these imports from Font Awesome
import { FaJava, FaAws, FaDatabase, FaWindows, FaMicrosoft } from 'react-icons/fa';
import { VscAzure } from "react-icons/vsc";

import { JSX } from 'react';

// Projects

export interface Project {
  name: string;
  date: string;
  image?: string;
  tags: string[];
  description: string;
  longDescription: string;
  link?: string;
}
  
export const projects: Project[] = [
  {
    name: 'Fediblend - Fediverse Feed Amalgamator',
    date: 'Oct 2023 – Dec 2023',
    tags: ['HTML', 'CSS', 'JavaScript', 'Git', 'Agile'],
    description: 'A landing page that pulls trending posts from user-specified instances of the federated social media network.',
    longDescription: 'Improved loading time by 30% with parallelized API calls and implemented robust JavaScript test functions with 95% code coverage.',
    link: 'https://github.com/cse210-works-on-my-machine/CSE210-Fall23-Team-3',
  },
  {
    name: 'Multi-Modal Recommender Systems',
    date: 'Oct 2023 – Dec 2023',
    tags: ['Pandas', 'Vaex', 'Plotly', 'PyTorch'],
    description: 'A rating prediction system using text and image embeddings from Google Local Reviews data.',
    longDescription: 'Utilized BERT and VGG16 for multi-modal features and built a Deep and Cross Network model, achieving 0.59 MSE.',
  },
  {
    name: 'Uber Data Analysis Using BigQuery',
    date: 'Jul 2023 - Aug 2023',
    tags: ['SQL', 'Google Cloud', 'Mage-AI', 'Python'],
    description: 'An ETL pipeline and data analysis project to generate insights from Uber trip data.',
    longDescription: 'Designed and executed ETL pipelines using BigQuery and Mage-AI, and built interactive dashboards for trip pattern analysis.',
  },
  {
    name: 'Efficient and Goal-Conditioned Learning in RL',
    date: 'Apr 2023 – Jun 2023',
    tags: ['PyTorch', 'Python', 'Linux', 'Git'],
    description: 'Improved the performance of TD-MPC by using offline demos and conditioned goal generation.',
    longDescription: 'Achieved faster goal completion with 25% fewer training steps compared to fixed goal methods through GAN-based goal generation.',
    link: 'https://github.com/shrivaths16/cole_cogo_rl',
  },
  {
    name: 'Knowledge Distillation on Transformers',
    date: 'Apr 2023 – Jun 2023',
    tags: ['Python', 'PyTorch', 'Transformers'],
    description: 'A comparative analysis of model compression on BERT and GPT-2 models using textbrewer.',
    longDescription: 'Reduced teacher model size by 50-80% while retaining 90-92% of the original accuracy.',
  },
];
  
// Skills

export interface Skill {
  name: string;
  icon?: JSX.Element;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming Languages',
    skills: [
      { name: 'Python' },
      { name: 'JavaScript' },
      { name: 'SQL' },
      { name: 'HTML/CSS' },
      { name: 'C/C++' },
    ],
  },
  {
    name: 'Frameworks & Libraries',
    skills: [
      { name: 'Pandas' },
      { name: 'Numpy' },
      { name: 'PyTorch' },
      { name: 'TensorFlow' },
      { name: 'Plotly' },
      { name: 'FastAPI' },
      { name: 'LangChain' },
      { name: 'React' },
      { name: 'Node.js' },
      { name: 'Tailwind CSS' },
    ],
  },
  {
    name: 'Tools & Technologies',
    skills: [
      { name: 'Git' },
      { name: 'Docker' },
      { name: 'Terraform' },
      { name: 'Azure' },
      { name: 'AWS' },
      { name: 'MS SQL Server' },
      { name: 'Apache NiFi' },
      { name: 'Jenkins' },
      { name: 'PM2' },
      { name: 'Bash' },
      { name: 'NGinx' },
      { name: 'Postman' },
      { name: 'Linux' },
      { name: 'Windows' },
    ],
  },
];

// Experience

export interface Experience {
  year: string;
  title: string;
  company: string;
  location: string;
  logo?: string;
  description: string[];
}

export const experiences: Experience[] = [
  {
    year: 'Aug 2024 - Present',
    title: 'AI Engineer',
    company: 'NLitendata LLC',
    location: 'San Diego, California, USA',
    description: ['Designed and deployed AI-driven microservices and automation systems leveraging FastAPI, Node.js, LangChain, and GPT-4o to streamline business workflows and data processing.',
      'Experienced in end-to-end cloud infrastructure setup using Azure, Terraform, NiFi, and Cloudflare to deliver scalable, secure, and high-performance applications.',]
  },
  {
    year: 'Jul 2023 - Jun 2024',
    title: 'Research Engineer',
    company: 'Salk Institute for Biological Studies',
    location: 'San Diego, California, USA',
    description: ['Contributed to the SLEAP open-source library by developing pose estimation features, training models, and building tracking algorithms.',
      'Improved accuracy and usability through modular APIs, cross-platform packaging, and CI/CD automation.',]
  },
  {
    year: 'Nov 2020 - May 2022',
    title: 'Programmer Analyst',
    company: 'Cognizant Technology Solutions',
    location: 'Chennai, Tamil Nadu, India',
    description: ['Built and deployed BPM-driven enterprise applications using Pega, REST APIs, and SQL for Prudential Financial.',
    'Developed full-stack services and automated CI/CD pipelines with Jenkins to streamline case workflows.',]
  },
];