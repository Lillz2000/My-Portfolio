
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'C:/Program Files/Git/My-Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/My-Portfolio"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/My-Portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/My-Portfolio/skills"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/My-Portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/Program%20Files/Git/My-Portfolio/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23598, hash: 'debf79991913684c0090fc84d241b8088c5288e526b195b2b49bd4f4ba971b9e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17172, hash: '5352337a087ba429edb1803d37546e5c77dde82d171aec3567dea435f7858850', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-WNKDDIZJ.css': {size: 6979, hash: 'AsSxQJi0uyE', text: () => import('./assets-chunks/styles-WNKDDIZJ_css.mjs').then(m => m.default)}
  },
};
