
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjcyZGFjNzBiLTE0NjQtNDQ3YS1hY2YxLTQxZDA1ZjUwYjExNiIsInN1YiI6InRlc3Q4QHRlc3QuY29tIiwiZW1haWwiOiJ0ZXN0OEB0ZXN0LmNvbSIsImp0aSI6IjgwMjVmM2M5LWJlODQtNDE2Yi05ZTBiLWE1ODljMjcyZjVkOCIsInJvbGUiOiJBcHBsaWNhbnQiLCJuYmYiOjE2Mzg2OTUxMzYsImV4cCI6MTYzODcxNjczNiwiaWF0IjoxNjM4Njk1MTM2fQ.bhcihYaVGYn78LjlDv_0nWmMZkoNuYliV50f_YEe4XMkpkOWeLQJdWHE6Wcq4M3oxHdXPZFScY93UwxOMZSLEQ"
  constructor() { }


  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // console.log(" JWT interceptor fired");

    const headersConfig: any = {
      Accept: 'application/json',
    };
    headersConfig['Authorization'] = `Bearer ${this.token}`;
    const request = req.clone({ setHeaders: headersConfig });
    return next.handle(request);
  }
}
