export interface Project {
    name: string;
    date: string;
    tags: string[];
    description: string;
    longDescription: string;
    link?: string; // Make link optional
  }
  
  // Replace the old projects array with this new one
  export const projects: Project[] = [
    {
      name: 'Fediblend - Fediverse Feed Amalgamator',
      date: 'Oct 2023 – Dec 2023',
      tags: ['HTML', 'CSS', 'JavaScript', 'Git', 'Agile'],
      description: 'A landing page that pulls trending posts from user-specified instances of the federated social media network.',
      longDescription: 'Improved loading time by 30% with parallelized API calls and implemented robust JavaScript test functions with 95% code coverage.',
      link: 'https://github.com/your-repo-link', // Add actual link if available
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
      link: 'https://github.com/your-repo-link', // Add actual link if available
    },
    {
      name: 'Knowledge Distillation on Transformers',
      date: 'Apr 2023 – Jun 2023',
      tags: ['Python', 'PyTorch', 'Transformers'],
      description: 'A comparative analysis of model compression on BERT and GPT-2 models using textbrewer.',
      longDescription: 'Reduced teacher model size by 50-80% while retaining 90-92% of the original accuracy.',
    },
  ];
  
  export interface SkillCategory {
    name: string;
    skills: string[];
  }
  
  export const skillCategories: SkillCategory[] = [
    {
      name: 'Programming Languages',
      skills: ['Python', 'JavaScript', 'SQL', 'HTML/CSS', 'Java', 'C/C++'],
    },
    {
      name: 'Frameworks, OS & Tools',
      skills: [
        'Pandas', 'PyTorch', 'Jenkins', 'Git', 'AWS', 'MS SQL Server',
        'Apache NiFi', 'Postman', 'FastAPI', 'ReactJS', 'PM2', 'NGinx',
        'Bash', 'Windows', 'Linux'
      ],
    },
  ];

  export interface Experience {
    year: string;
    title: string;
    company: string;
    location: string;
    description: string;
  }
  
  export const experiences: Experience[] = [
    {
      year: 'Aug 2024 - Present',
      title: 'AI Engineer',
      company: 'NLitendata LLC',
      location: 'San Diego, California, USA',
      description: 'Built scalable data-driven applications and GPT-powered tools using FastAPI, Apache NiFi, and AWS. Led full-stack development, ML modeling, and client-facing demos in an agile, cross-functional team.',
    },
    {
      year: 'Jul 2023 - Jun 2024',
      title: 'Research Engineer',
      company: 'Salk Institute for Biological Studies',
      location: 'San Diego, California, USA',
      description: 'Contributed to the SLEAP open-source library by developing pose estimation features, training models, and building tracking algorithms. Improved accuracy and usability through modular APIs, cross-platform packaging, and CI/CD automation.',
    },
    {
      year: 'Nov 2020 - May 2022',
      title: 'Programmer Analyst',
      company: 'Cognizant Technology Solutions',
      location: 'Chennai, Tamil Nadu, India',
      description: 'Built and deployed BPM-driven enterprise applications using Pega, REST APIs, and SQL for Prudential Financial. Developed full-stack services and automated CI/CD pipelines with Jenkins to streamline case workflows.',
    },
  ];