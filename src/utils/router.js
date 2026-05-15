export function normalizePath() {
  const hash = window.location.hash.replace(/^#/, '');
  const route = hash.split('#')[0].replace(/\/$/, '') || '/my-profile';
  const path = route.startsWith('/') ? route : `/${route}`;
  return path;
}

export function navigateTo(path) {
  window.location.hash = path;
  window.dispatchEvent(new HashChangeEvent('hashchange'));
  const targetId = path.split('#')[1];
  if (targetId) {
    window.setTimeout(() => {
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
    return;
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
