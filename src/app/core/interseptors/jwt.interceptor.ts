
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjcyZGFjNzBiLTE0NjQtNDQ3YS1hY2YxLTQxZDA1ZjUwYjExNiIsInN1YiI6InRlc3Q4QHRlc3QuY29tIiwiZW1haWwiOiJ0ZXN0OEB0ZXN0LmNvbSIsImp0aSI6IjExY2QzNDc4LTk5ZDItNDU4Ni04NmQ2LTJkZjk0ZGEyMWNjNiIsInJvbGUiOiJBcHBsaWNhbnQiLCJuYmYiOjE2Mzg3OTcyMTIsImV4cCI6MTYzODgxODgxMiwiaWF0IjoxNjM4Nzk3MjEyfQ.bVYWL8z1AKLWcZ0C5GDkNIR0JsQZ_ctudw6HEH_pHsfvtjKjNZmNbUReGXmbzw2qa11DV87Mz41MsK0b2QvZkw"
  constructor() { }


  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log(" JWT interceptor fired");

    const headersConfig: any = {
      Accept: 'application/json',
      'content-type':'application/json'
    };
    headersConfig['Authorization'] = `Bearer ${this.token}`;
    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request);
  }
}
