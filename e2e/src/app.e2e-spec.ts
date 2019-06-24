import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display page title',  () => {
    const title = page.getPageTitle().getText();
    expect(title).toContain('Tab One');
  });

  it('should display page title tab two', () => {
    page.getTabTwoButton().click();
    const title = page.getPageTitleLast().getText();
    expect(title).toContain('Tab Two');
  });

  it('should display page title tab three', () => {
    page.getTabThreeButton().click();
    const title = page.getPageTitleLast().getText();
    expect(title).toContain('Tab Four');
  });

});
