import { newSpecPage } from '@stencil/core/testing';
import { AppRemote } from './app-remote';

describe('app-remote', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AppRemote],
      html: `<app-remote></app-remote>`,
    });
    expect(page.root).toEqualHtml(`
      <app-remote>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </app-remote>
    `);
  });
});
