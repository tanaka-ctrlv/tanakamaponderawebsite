// Render project information as text, so it remains safe and easy to edit.
const projects = Array.isArray(window.PORTFOLIO_PROJECTS) ? window.PORTFOLIO_PROJECTS : [];
const work = document.getElementById('work');
const grid = document.getElementById('project-grid');

function safeUrl(value, image = false) {
  try {
    const parsed = new URL(value, window.location.href);
    if (!['https:', 'http:'].includes(parsed.protocol)) return null;
    if (image && parsed.origin !== window.location.origin) return null;
    return parsed.href;
  } catch { return null; }
}

for (const project of projects) {
  if (!project || typeof project.title !== 'string') continue;
  const article = document.createElement('article');
  article.className = 'project';
  const url = project.url ? safeUrl(project.url) : null;
  const content = url ? document.createElement('a') : document.createElement('div');
  if (url) { content.href = url; content.target = '_blank'; content.rel = 'noopener noreferrer'; }
  const imageUrl = project.image ? safeUrl(project.image, true) : null;
  if (imageUrl) {
    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = project.alt || project.title;
    image.loading = 'lazy';
    content.append(image);
  }
  const title = document.createElement('h3');
  title.textContent = project.title;
  if (url) {
    const arrow = document.querySelector('.wordmark .icon-arrow').cloneNode(true);
    title.append(' ', arrow);
  }
  content.append(title);
  article.append(content);
  const meta = document.createElement('p');
  meta.className = 'project-meta';
  meta.textContent = [project.discipline, project.year].filter(Boolean).join(' / ');
  article.append(meta);
  if (project.description) {
    const description = document.createElement('p');
    description.textContent = project.description;
    article.append(description);
  }
  grid.append(article);
}
if (grid.children.length) {
  work.hidden = false;
  document.getElementById('project-count').textContent = String(grid.children.length).padStart(2, '0') + ' projects';
}
document.getElementById('year').textContent = new Date().getFullYear();
