import { DocHead } from 'meteor/kadira:dochead';

export const name = 'prerender-meta';
export class PrerenderMeta {
  addMeta() {
    DocHead.addMeta({
      name: 'prerender-status-code',
      content: this.statusCode || 200,
    });

    if (this.redirectUrl) {
      DocHead.addMeta({
        name: 'prerender-header',
        content: `Location: ${this.redirectUrl}`,
      });
    }
  }

  redirect(url) {
    if (this.statusCode) {
      // status code was already set
      return;
    }

    this.statusCode = 301;
    this.redirectUrl = url;

    this.addMeta();
  }

  notFound() {
    if (this.statusCode) {
      // status code was already set
      return;
    }

    this.statusCode = 404;

    this.addMeta();
  }

  timeout() {
    this.statusCode = 504;

    DocHead.removeDocHeadAddedTags();
    this.addMeta();
  }
}
