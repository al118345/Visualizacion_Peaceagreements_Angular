import { OficinaVirtualPage } from './app.po';

describe('oficina-virtual App', () => {
  let page: OficinaVirtualPage;

  beforeEach(() => {
    page = new OficinaVirtualPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
