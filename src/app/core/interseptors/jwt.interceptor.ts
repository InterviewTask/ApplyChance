
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjcyZGFjNzBiLTE0NjQtNDQ3YS1hY2YxLTQxZDA1ZjUwYjExNiIsInN1YiI6InRlc3Q4QHRlc3QuY29tIiwiZW1haWwiOiJ0ZXN0OEB0ZXN0LmNvbSIsImp0aSI6ImJhMWM5MTg0LTBhMzgtNDBkOC1hZmQxLTQwMTMzYTgxZjM5YyIsInJvbGUiOiJBcHBsaWNhbnQiLCJuYmYiOjE2Mzg2OTI4ODYsImV4cCI6MTYzODcxNDQ4NiwiaWF0IjoxNjM4NjkyODg2fQ.Ilh70Rz-6_LJg2e5FqiWXaRZgrk3Z04sEhv1uT0grkkgZTkOqd7vinHOVblzbPaYRpk-JAMr_4sOBq2JJ55SZg"
  constructor() { }


  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log(" JWT interceptor fired");

    const headersConfig: any = {
      Accept: 'application/json',
    };
    headersConfig['Authorization'] = `${this.token}`;
    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request);
  }
}
