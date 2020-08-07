import i18next from 'i18next';
import Routes from '@constants/routes';

// TODO: Replace here the screens titles

i18next.addResources('es', 'app', {
  [Routes.Login]: 'Login',
  [Routes.SignUp]: 'SignUp',
  [Routes.Home]: 'Home',
  [Routes.OnBoarding]: 'OnBoarding'
});
