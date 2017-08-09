import { UpPeatWebsitePage } from './app.po';

describe('up-peat-website App', () => {
  let page: UpPeatWebsitePage;

  beforeEach(() => {
    page = new UpPeatWebsitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
