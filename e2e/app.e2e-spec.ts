import { ScrumWisePage } from './app.po';

describe('scrum-wise App', () => {
  let page: ScrumWisePage;

  beforeEach(() => {
    page = new ScrumWisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
