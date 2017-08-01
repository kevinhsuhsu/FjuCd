import { FjuCdPage } from './app.po';

describe('fju-cd App', () => {
  let page: FjuCdPage;

  beforeEach(() => {
    page = new FjuCdPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
