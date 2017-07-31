import { AnimoPage } from './app.po';

describe('animo App', () => {
  let page: AnimoPage;

  beforeEach(() => {
    page = new AnimoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
