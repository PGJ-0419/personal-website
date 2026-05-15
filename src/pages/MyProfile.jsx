import { ExternalLink } from 'lucide-react';
import { Section } from '../components/Section.jsx';
import { latestNews } from '../data/site.js';

export function MyProfile() {
  return (
    <div className="page-shell profile-page">
      <section className="profile-hero">
        <div>
          <p className="hero-kicker">Zeyuan's Homepage</p>
          <h1>Zeyuan Ma</h1>
          <p>The Latest News: I joined South China Normal University (SCNU) as an Associate Professor!</p>
        </div>
      </section>

      <Section eyebrow="News" title="The Latest News">
        <div className="list-card news-list">
          {latestNews.map((item) => (
            <p key={item.date}><strong>{item.date}</strong> {item.text}</p>
          ))}
        </div>
      </Section>

      <Section eyebrow="Biography" title="Biography">
        <div id="biography" className="text-card rich-text">
          <p>Hi my friend, I am Zeyuan Ma, welcome to visit my homapage. I received my B.Eng. degree from School of Computer Science and Engineering, South China University of Technology (SCUT), Guangzhou, China, in 2022. In 2022-2026, I pursued my Ph.D. degree at SCUT, supervised by Prof. Yue-Jiao Gong. I joined AI4Opt group at Singapore Management University (SMU) as a visiting student in 2025, co-supervised by Prof. Yue-Jiao Gong and Prof. Zhiguang Cao.</p>
          <p>Currently, I am an Associate Professor at School of Artificial Intelligence, South China Normal University (SCNU). My research interests initially focus on learning-assisted optimization algorithms, where I establishsed a systematic paradigm (Meta-Black-Box Optimziation, MetaBBO) that automates algorithm designs in evolutionary optimization through meta learning.</p>
          <p>Currently, I extend my researches toward several cutting-edge topics such as evolutionary LLMs post-training, HyperAgents system with world model, LLMs for optimization and generalized optimization system in realworld applications. I have (co-) authored over 30 publications, most of which are published in top-tier conferences and journals such as ICML, ICLR, NeurIPS, AAAI, KDD and IEEE TEVC.</p>
          <p>I also actively serve as reviewer/PC member for many well-known AI conferences and journals including the mentinoed ones. I have participated in organizing LEAD 2025, OPEA 2025 and IJCAI-LEAD 2026 workshops. More recently, I was invited as an Associate Editor of Journal of Intelligent and Sustainable Systems.</p>
        </div>
      </Section>

      <Section eyebrow="MetaEvo" title="My Research Team (MetaEvolution Lab, MetaEvo)">
        <div id="team" className="text-card rich-text">
          <a className="inline-link" href="https://metaevo.github.io/" target="_blank" rel="noreferrer">MetaEvo <ExternalLink size={15} /></a>
          <p>In the end of 2021 (approximately), my supervisor Prof. Yue-Jiao Gong, teamate Hongshu Guo and I started to establish a special task-force on Learning-assisted Optimization. Our initial intention is to explore how to use advanced learning techniques to enhance exsiting evolutionary optimizers in terms of their optimization performance and cross-domain generalization capability.</p>
          <p>Along this vision, we gathered many talented and hard-working student members, including undergraduate students, master students and a few PhD students. In the last four years, we have made certain progresses in developing diverse MetaBBO paradigms, analyzing the advantages and limitations behind and adapting them in the wild.</p>
        </div>
      </Section>

      <Section eyebrow="Featured Works" title="Featured Works">
        <div id="featured-works" className="card-grid three-featured">
          <article className="info-card"><h3>Survey</h3><p>A systematic survey entitled “Toward Automated Algorithm Design: A Survey and Practical Guide to Meta-Black-Box-Optimization”, published at IEEE Transactions on Evolutionary Computation.</p></article>
          <article className="info-card"><h3>Benchmarking Platform</h3><p>MetaBox benchmark platform supports learning, developing, and applying learning-based optimization approaches. The MetaBox papers are published at NeurIPS and selected as Oral presentation.</p></article>
          <article className="info-card"><h3>Algorithms</h3><p>Several key MetaBBO techniques were accepted by CCF A conferences including ICML, ICLR, NeurIPS, AAAI, KDD and journals including IEEE TEVC and TSMC.</p></article>
        </div>
      </Section>

      <Section title="Links">
        <div className="contact-card">
          <p>G. Scholor: <a href="https://scholar.google.com/citations?user=Jcy8wPgAAAAJ" target="_blank" rel="noreferrer">Zy. Ma</a></p>
          <p>Email: <a href="mailto:mzy@ieee.org">mzy@ieee.org</a></p>
        </div>
      </Section>
    </div>
  );
}
