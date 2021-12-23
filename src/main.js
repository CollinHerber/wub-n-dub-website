import Aurelia, { RouterConfiguration } from 'aurelia';
import { AllConfiguration } from '@aurelia-mdc-web/all';
import { App } from './app';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

Aurelia
    .register(RouterConfiguration, AllConfiguration)
    .app(App)
    .start();
