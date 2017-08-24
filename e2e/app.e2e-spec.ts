import { TestcloudPage } from './app.po';

describe('testcloud App', function() {
  let page: TestcloudPage;

  beforeEach(() => {
    page = new TestcloudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
