export const profile = {
  name: 'Joseph Y. Cordero Mercado',
  title: 'Data Platform Architect',
  // Large display headline shown at the top of the right panel — make it personal
  headline: 'Architecting Data\nAt Scale.',
  location: 'Lakeland, FL',
  phone: '+1 787-245-8732',
  email: 'joseph.cordero1@gmail.com',
  website: 'jycordero.github.io',
  resume: '/images/Resume.pdf',
  profileImage: '/images/profile.jpg',

  social: {
    github: 'jycordero',
    linkedin: 'josephcm',
    instagram: null,
    twitter: null,
    youtube: null,
  },

  about: `Data Platform Architect and Data Engineer with experience designing and delivering cloud-native
    data platforms on Azure. Proven track record building medallion architectures, MLOps pipelines, and
    enterprise ETL/ELT solutions across multiple industries. Passionate about scalable data infrastructure,
    metadata-driven engineering, and bridging the gap between raw data and business value.`,

  skills: [
    {
      label: 'Cloud',
      items: ['Azure Fabric', 'ADF', 'Blob Storage', 'Azure Synapse Analytics', 'EventGrid', 'Azure DevOps', 'Databricks', 'Spark', 'AWS Storage', 'CI/CD'],
    },
    {
      label: 'Languages',
      items: ['Python', 'PySpark', 'SQL', 'Bash', 'R', 'C++'],
    },
    {
      label: 'Technologies',
      items: ['Git', 'Docker', 'Airflow', 'MLflow'],
    },
  ],

  showReferences: true,
}
