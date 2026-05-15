import { Section } from '../components/Section.jsx';
import { navigateTo } from '../utils/router.js';

export function More() {
  return (
    <div className="page-shell">
      <Section eyebrow="More" title="More">
        <div className="card-grid three-featured">
          <button className="feature-card" onClick={() => navigateTo('/my-profile')}><h3>My Profile</h3><p>Biography, latest news, research team, and featured works.</p><span>Open</span></button>
          <button className="feature-card" onClick={() => navigateTo('/publications-resources')}><h3>Publications & Resources</h3><p>Publications, resources, code, tutorials, and academic materials.</p><span>Open</span></button>
          <button className="feature-card" onClick={() => navigateTo('/reflections')}><h3>Reflections</h3><p>Research notes, reflections, and personal writings.</p><span>Open</span></button>
        </div>
      </Section>
    </div>
  );
}
