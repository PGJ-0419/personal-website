import { siteProfile } from '../data/site.js';

export function Footer() {
  return (
    <footer className="site-footer">
      <p>{siteProfile.name}</p>
      <p>{siteProfile.email} · {siteProfile.location}</p>
    </footer>
  );
}
