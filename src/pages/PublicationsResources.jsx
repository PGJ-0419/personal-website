import { ExternalLink } from 'lucide-react';
import { Section } from '../components/Section.jsx';

export function PublicationsResources() {
  return (
    <div className="page-shell">
      <Section eyebrow="Publications & Resources" title="Publications & Resources">
        <div className="list-card rich-text">
          <p>This page follows the original Google Sites navigation for publications, code, tutorials, and academic resources. Replace or extend the items below with the full publication list from the original page when available.</p>
          <p id="survey"><strong>MetaBBO Survey:</strong> Toward Automated Algorithm Design: A Survey and Practical Guide to Meta-Black-Box-Optimization.</p>
          <p id="metabox"><strong>MetaBox:</strong> Benchmarking platform papers, code, and tutorial resources.</p>
          <p id="algorithms"><strong>Algorithms:</strong> Works accepted by ICML, ICLR, NeurIPS, AAAI, KDD, IEEE TEVC, and TSMC.</p>
          <a className="inline-link" href="https://sites.google.com/view/scnu-mzy/publications-resources" target="_blank" rel="noreferrer">Original Google Sites page <ExternalLink size={15} /></a>
        </div>
      </Section>
    </div>
  );
}
