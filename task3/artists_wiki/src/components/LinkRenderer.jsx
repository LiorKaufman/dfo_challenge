import marked from 'marked';

const Renderer = new marked.Renderer();

export const linkRenderer = (href, title, string) => {
  title = title || '';

  const external = href.match(/^https?:\/\//);

  if (external) {
    return `<a target="_blank" rel="noopener noreferer" href="${href}" title="${title}">${string}</a>`;
  } else {
    return `<a href="${href}" title="${title}">${string}</a>`;
  }
};

Renderer.link = linkRenderer;

export default Renderer;
