import { MiniTimelinePage } from './app.po';

describe('mini-timeline App', function() {
  let page: MiniTimelinePage;

  beforeEach(() => {
    page = new MiniTimelinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
