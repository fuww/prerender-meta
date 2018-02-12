Package.describe({
  name: 'fuww:prerender-meta',
  version: '0.0.1',
  summary: 'Adds the prerender headers in meta tags',
  git: 'https://github.com/fuww/prerender-meta.git',
  documentation: 'README.md',
});

Package.onUse((api) => {
  api.use(['ecmascript@0.10.0', 'kadira:dochead@1.5.0']);

  api.mainModule('prerender-meta.js');
});
