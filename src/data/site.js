export const siteProfile = {
  name: "Zeyuan's Homepage",
  subtitle: 'South China Normal University',
  heroTitle: 'Zeyuan Ma',
  heroText: 'The Latest News: I joined South China Normal University (SCNU) as an Associate Professor!',
  email: 'mzy@ieee.org',
  location: 'Guangzhou, China',
};

export const navItems = [
  { label: 'My Profile', path: '/my-profile' },
  {
    label: 'Publications & Resources',
    path: '/publications-resources',
    children: [
      { label: 'Survey', path: '/publications-resources#survey' },
      { label: 'MetaBox', path: '/publications-resources#metabox' },
      { label: 'Algorithms', path: '/publications-resources#algorithms' },
    ],
  },
  { label: 'Reflections', path: '/reflections' },
  {
    label: 'More',
    path: '/more',
    children: [
      { label: 'Biography', path: '/my-profile#biography' },
      { label: 'Research Team', path: '/my-profile#team' },
      { label: 'Featured Works', path: '/my-profile#featured-works' },
    ],
  },
];

export const searchIndex = [
  { title: 'My Profile', description: 'Biography, latest news, MetaEvo team, featured works', path: '/my-profile' },
  { title: 'Biography', description: 'Zeyuan Ma, SCNU, SCUT, SMU, AI4Opt, MetaBBO', path: '/my-profile#biography' },
  { title: 'MetaEvolution Lab', description: 'MetaEvo research team and learning-assisted optimization', path: '/my-profile#team' },
  { title: 'Featured Works', description: 'Survey, MetaBox benchmarking platform, algorithms', path: '/my-profile#featured-works' },
  { title: 'Publications & Resources', description: 'Papers, code, tutorials, MetaBBO resources', path: '/publications-resources' },
  { title: 'Reflections', description: 'Research notes, reflections, and personal writings', path: '/reflections' },
  { title: 'Email', description: 'mzy@ieee.org', path: '/my-profile' },
];

export const latestNews = [
  { date: '2026.05.14', text: 'I am awarded as "Gold Reviewer" by ICML 2026.' },
  { date: '2026.04.21', text: 'One paper got ACM GECCO 2026 "Best Paper Award Nomination", congrats!' },
  { date: '2026.03.24', text: 'Five papers on MetaBBO got accepted by ACM GECCO 2026.' },
  { date: '2026.03.07', text: 'Our Workshop on Learning-assisted Algorithm Design got accepted by IJCAI-ECAI 2026.' },
  { date: '2026.01.15', text: 'One paper on LLM-based Optimization got accepted by IEEE TEVC (SCI Q1 Top, IF=12.0).' },
  { date: '2025.12.29', text: "Our work on ES for LLM's Reasoning got accepted by Bridge LMReasoning@AAAI 2026." },
  { date: '2025.12.24', text: 'The Chinese version of our survey paper got accepted by Chinese Jounal of Computers (计算机学报).' },
  { date: '2025.11.08', text: 'One paper on automatic BBO benchmark generation got accepted by AAAI 2026.' },
  { date: '2025.09.19', text: 'Two papers on MetaBBO (benchmark+algorithm) got accepted by NeurIPS 2025.' },
  { date: '2025.09.13', text: 'Our Workshop on Learning-assisted Evolutionary Algorithm Design has been held successfully online.' },
  { date: '2025.05.05', text: 'Our survey on MetaBBO got accepted by IEEE TEVC (SCI Q1 Top, IF=12.0).' },
];
