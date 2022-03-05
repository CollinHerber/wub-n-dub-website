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
    // {
    //   path: 'news',
    //   component: import('./pages/news/news'),
    //   title: 'News',
    // },
    {
      path: 'lineup',
      component: import('./pages/lineup/lineup'),
      title: 'Lineup',
    },
    {
      path: 'info',
      component: import('./pages/info/info'),
      title: 'Info',
    },
    {
      path: 'join',
      component: import('./pages/join/join'),
      title: 'Join',
    },
    {
      path: 'producers',
      component: import('./pages/producers/producers'),
      title: 'Producers',
    },
    {
      path: 'what-to-expect',
      component: import('./pages/what-to-expect/what-to-expect'),
      title: 'What to Expect',
    }
]})

export class App {

}