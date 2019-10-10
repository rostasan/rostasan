<<<<<<< HEAD
import { AppPage } from './app.po';

describe('rstatic App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
||||||| merged common ancestors
=======
import { AppPage } from './app.po';

describe('rostasan App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
>>>>>>> 86555e4ad3d4874d8a9a504ef8628f62c845d91e
