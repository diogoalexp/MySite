import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HttpClient, HttpEventType, HttpHandlerFn, HttpRequest, provideHttpClient, withInterceptors } from '@angular/common/http';
import { tap } from 'rxjs';
import {provideTranslateService, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
    new TranslateHttpLoader(http, './i18n/', '.json');

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideHttpClient(
      withInterceptors([loggingInterceptor])
    ),
    provideTranslateService({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
    })
  ]
};

function loggingInterceptor(request: HttpRequest<unknown>, next: HttpHandlerFn){
  console.log('[Outgoing Request]')
  console.log(request);
  // const req = request.clone({
  //     headers: request.headers.set('X-DEBUG', 'TESTING')
  // });
  return next(request)
  .pipe(
      tap({
          next: event =>{
              if(event.type === HttpEventType.Response){
                  console.log('[Incoming Response]')
                  console.log(event.status);
                  console.log(event.body);
              }
          }
      })
  );
}

