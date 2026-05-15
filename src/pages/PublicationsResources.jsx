import { Section } from '../components/Section.jsx';

const publications = [
  { text: 'Wang C, Ma S, Ma Z, et al. Evolution of Benchmark: Black-Box Optimization Benchmark Design through Large Language Model. ICML, 2026.', code: 'https://github.com/MetaEvo/EoB' },
  { text: 'Wang C, Gong Y J, Cao Z and Ma Z*. Instance Generation for Meta-Black-Box Optimization through Latent Space Reverse Engineering. AAAI, 2026.', code: 'https://github.com/MetaEvo/Diverse-BBO' },
  { text: 'Qiu W J, Guo H S, Ma Z, Zhang J and Gong Y J. 自动黑箱优化算法设计：进展与挑战. 计算机学报, 2026.', paper: 'http://cjc.ict.ac.cn/online/bfpub/qwj-202632100036.pdf' },
  { text: 'Ma Z, Huang W, Song G H, et al. Evolutionary System 2 Reasoning: An Empirical Proof. AAAI, 2026.', code: 'https://github.com/MetaEvo/ERO' },
  { text: 'Ma Z, Gong Y J, Guo H, et al. LLaMoCo: Instruction Tuning of Large Language Models for Optimization Code Generation. IEEE TEVC, 2026.', code: 'https://github.com/MetaEvo/LLaMoCo' },
  { text: 'Ma Z, Gong Y J, Guo H, et al. MetaBox-v2: A Unified Benchmark Platform for Meta-Black-Box Optimization. NeurIPS, 2025.', code: 'https://github.com/MetaEvo/MetaBox' },
  { text: 'Guo H, Ma Z, Ma Y, et al. DesignX: Human-Competitive Algorithm Designer for Black-Box Optimization. NeurIPS, 2025.', code: 'https://github.com/MetaEvo/DesignX' },
  { text: 'Ma Z, Guo H, Gong Y J, et al. Toward Automated Algorithm Design: A Survey and Practical Guide to Meta-Black-Box-Optimization. IEEE TEVC, 2025.', code: 'https://github.com/MetaEvo/Awesome-MetaBBO' },
  { text: 'Ma Z, Cao Z, Jiang Z, et al. Meta-Black-Box-Optimization Through Offline Q-function Learning. ICML, 2025.', code: 'https://github.com/MetaEvo/Q-Mamba' },
  { text: 'Ma Z, Chen J, Guo H, et al. Neural Exploratory Landscape Analysis for Meta-Black-Box-Optimization. ICLR, 2025.', code: 'https://github.com/MetaEvo/Neur-ELA' },
  { text: 'Guo H, Ma Z, Chen J, et al. ConfigX: Modular Configuration for Evolutionary Algorithms via Multitask Reinforcement Learning. AAAI, 2025.', code: 'https://github.com/MetaEvo/ConfigX' },
  { text: 'Ma Z, Chen J, Guo H, et al. Auto-Configuring Exploration-Exploitation Tradeoff in Evolutionary Computation via Deep Reinforcement Learning. ACM GECCO, 2024.', code: 'https://github.com/MetaEvo/GLEET' },
  { text: 'Guo H, Ma Y, Ma Z, et al. Deep Reinforcement Learning for Dynamic Algorithm Selection: A Proof-of-Principle Study on Differential Evolution. IEEE TSMC, 2024.', code: 'https://github.com/MetaEvo/RL-DAS' },
  { text: 'Chen J, Ma Z, Guo H, et al. SYMBOL: Generating Flexible Black-Box Optimizers through Symbolic Equation Learning. ICLR, 2024.', code: 'https://github.com/MetaEvo/Symbol' },
  { text: 'Ma Z, Guo H, Chen J, et al. Metabox: A Benchmark Platform for Meta-Black-Box Optimization with Reinforcement Learning. NeurIPS, 2023.', code: 'https://github.com/MetaEvo/MetaBox' },
];

const talks = [
  { text: 'NICE Student Seminar (2025-06-02), NeurELA and Q-Mamba.', href: 'https://www.bilibili.com/video/BV1Ck7azREzp/?spm_id_from=333.1387.homepage.video_card.click&vd_source=2240ecc28ef3670ad2e26c710fcfd985' },
  { text: 'AITIME AAAI 2025 Pre-Talk, ConfigX.', href: 'http://bilibili.com/video/BV17ecJeLEcL/?vd_source=483ce06efdf0f23997afa2d9e11b3c58' },
  { text: 'AITIME ICLR 2024 Pre-Talk, SYMBOL.', href: 'https://www.bilibili.com/video/BV1qH4y1L7mb/?vd_source=49c941c3fd65d17510be677726a52bc9' },
  { text: 'AITIME NeurIPS 2023 Pre-Talk, MetaBox.', href: 'https://www.bilibili.com/video/BV1Hu4y1J7Fs/?spm_id_from=333.999.0.0&vd_source=49c941c3fd65d17510be677726a52bc9' },
];

const services = [
  'Journal of Intelligent and Sustainable Systems (JISS), Associate Editor (2025-present)',
  'NeurIPS Reviewers (2024, 2025, 2026*)',
  'AAAI Reviewers (2025, 2026)',
  'ICML Reviewers (2025, 2026)',
  'ICLR Reviewers (2025,2026)',
  'IJCAI Reviewers (2026)',
  'IEEE TCDS Reviewers (2024-present)',
  'IEEE TEVC Reviewers (2024-present)',
  'IEEE TETCI Reviewers (2025-present)',
  'IEEE TII Reviewers (2026-present)',
  'Elsevier SWEVO Reviewers (2026-present)',
];

export function PublicationsResources() {
  return (
    <div className="page-shell">
      <Section eyebrow="Publications & Resources" title="Publications & Resources">
        <div className="publication-card">
          <p className="muted">Key Publications (*=Corresponding Author, ABC=Equal Contribution, see my <a href="https://scholar.google.com/citations?user=Jcy8wPgAAAAJ" target="_blank" rel="noreferrer">scholor page</a> for more)</p>
          <ol className="publication-list">
            {publications.map((item) => (
              <li key={item.text}>
                <span>{item.text}</span>
                <span className="paper-links">
                  <span>paper</span>
                  {item.paper && <a href={item.paper} target="_blank" rel="noreferrer">link</a>}
                  {item.code && <a href={item.code} target="_blank" rel="noreferrer">code</a>}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <Section eyebrow="Talks" title="Invited Talks">
        <div className="list-card rich-text">
          {talks.map((talk, index) => (
            <p key={talk.href}><strong>{index + 1}.</strong> <a href={talk.href} target="_blank" rel="noreferrer">{talk.text}</a></p>
          ))}
        </div>
      </Section>

      <Section eyebrow="Services" title="Services">
        <div className="list-card service-list">
          {services.map((service, index) => <p key={service}><strong>{index + 1}.</strong> {service}</p>)}
        </div>
      </Section>
    </div>
  );
}
