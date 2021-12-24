import { route } from '@aurelia/router';

@route({
  routes: [
    {
      path: '',
      component: import('./pages/home/home'),
      title: 'Home',
    },
    {
      path: 'camping',
      component: import('./pages/camping/camping'),
      title: 'Camping',
    },
    {
      path: 'news',
      component: import('./pages/news/news'),
      title: 'News',
    },
    {
      path: 'lineup',
      component: import('./pages/lineup/lineup'),
      title: 'Lineup',
    },
    {
      path: 'info',
      component: import('./pages/info/info'),
      title: 'Info',
    }
]})

export class App {

}
