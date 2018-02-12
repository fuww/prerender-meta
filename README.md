# Prerender Meta

## Usage

```js
const prerenderMeta = new PrerenderMeta();

// adds the prerender header meta tags
prerenderMeta.addPrerenderMeta();

// redirect 301
prerenderMeta.redirect(url);

// not found 404
prerenderMeta.notFound();

// timeout 504
prerenderMeta.timeout()
```
