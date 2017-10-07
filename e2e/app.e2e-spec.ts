import { JosephEmelikePage } from './app.po';

describe('joseph-emelike App', () => {
  let page: JosephEmelikePage;

  beforeEach(() => {
    page = new JosephEmelikePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
