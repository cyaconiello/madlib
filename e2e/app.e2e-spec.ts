import { Madlib1Page } from './app.po';

describe('madlib1 App', function() {
  let page: Madlib1Page;

  beforeEach(() => {
    page = new Madlib1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
