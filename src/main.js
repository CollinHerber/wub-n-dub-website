import Aurelia, { RouterConfiguration } from 'aurelia';
import { AllConfiguration } from '@aurelia-mdc-web/all';
import { App } from './app';
import { WubNavbar } from "./resources/elements/wub-navbar/wub-navbar";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

Aurelia
    .register(RouterConfiguration, AllConfiguration, WubNavbar)
    .app(App)
    .start();
