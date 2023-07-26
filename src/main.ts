import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppComponent } from './app/app.component';
import { bootstrapApplication, provideProtractorTestingSupport } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';

bootstrapApplication(AppComponent,
  {
    providers: [
    provideProtractorTestingSupport(),
    provideRouter(routeConfig)
  ]
}
).catch(err => console.error(err));
