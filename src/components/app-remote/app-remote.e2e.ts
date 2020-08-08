import { newE2EPage } from '@stencil/core/testing';

describe('page-remote', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<app-remote></app-remote>');

    const element = await page.find('app-remote');
    expect(element).toHaveClass('hydrated');
  });
});
