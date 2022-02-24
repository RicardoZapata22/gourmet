import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { SessionService } from '../services/session.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  authTokenFail = false;

  constructor(
    private session: SessionService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let dataReq: HttpRequest<any>;
    let headers: any = {
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: this.session.get() != null ? this.session.get().token : ''
    };

    if (req.url.indexOf('.txt') !== -1) {
      headers['Access-Control-Allow-Origin'] = '*';
      headers['Content-Type'] = 'text/plain; charset=utf-8';
    }

    dataReq = req.clone({
      body: (req.method === 'POST' || req.method === 'PUT') ? JSON.stringify(req.body) : req.body,
      url: (req.url.indexOf('http') === -1 || req.url.indexOf('./') === -1) ? environment.api.url + encodeURI(req.url) : req.url,
      setHeaders: headers
    });

    return next.handle(dataReq).pipe(
      map(resp => {
        return this.modifyResponse(resp);
      }),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // client-side error
            errorMessage = `Error: ${error.error.message}`;
        } else {
            // server-side error
            errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
        }
        //console.log(errorMessage);
        return throwError(errorMessage);
      })
   );
  }

  private modifyResponse(event: HttpEvent<any>) {
    let response!: HttpEvent<any>;

    if (event instanceof HttpResponse) {
      response = event.clone({
        body: event.body
      });
    }
    return response;
  }
}
