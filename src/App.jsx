import { useEffect, useState } from 'react';
import { Layout } from './components/Layout.jsx';
import { More } from './pages/More.jsx';
import { MyProfile } from './pages/MyProfile.jsx';
import { PublicationsResources } from './pages/PublicationsResources.jsx';
import { Reflections } from './pages/Reflections.jsx';
import { normalizePath } from './utils/router.js';

const routes = {
  '/': MyProfile,
  '/my-profile': MyProfile,
  '/publications-resources': PublicationsResources,
  '/reflections': Reflections,
  '/more': More,
};

export function App() {
  const [path, setPath] = useState(normalizePath());

  useEffect(() => {
    const updatePath = () => setPath(normalizePath());
    window.addEventListener('hashchange', updatePath);
    return () => window.removeEventListener('hashchange', updatePath);
  }, []);

  const Page = routes[path] || MyProfile;

  return (
    <Layout>
      <Page />
    </Layout>
  );
}
