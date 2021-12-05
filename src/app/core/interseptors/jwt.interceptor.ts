
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6IjcyZGFjNzBiLTE0NjQtNDQ3YS1hY2YxLTQxZDA1ZjUwYjExNiIsInN1YiI6InRlc3Q4QHRlc3QuY29tIiwiZW1haWwiOiJ0ZXN0OEB0ZXN0LmNvbSIsImp0aSI6ImQ1MGQ5NmE0LTI2MGMtNGRkYi1hNGQxLWMyMzg3ODY4ZDE0NyIsInJvbGUiOiJBcHBsaWNhbnQiLCJuYmYiOjE2Mzg3MTI4NzQsImV4cCI6MTYzODczNDQ3NCwiaWF0IjoxNjM4NzEyODc0fQ.lkyHgps5tG12fHR-CJmgtVsynhRr1Z8pnjuxjkutzO5llYsXcwDUDW5pm6zetLHS93E677iUpxLuxNnwn9x7Mw"
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
