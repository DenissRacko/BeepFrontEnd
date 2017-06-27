import { BeepFrontEndPage } from './app.po';

describe('beep-front-end App', () => {
  let page: BeepFrontEndPage;

  beforeEach(() => {
    page = new BeepFrontEndPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
