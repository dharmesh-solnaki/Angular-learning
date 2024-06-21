import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

export class RequestInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log(`request with this url is just made  ${req.url}`);
    const modifiedReq = req.clone({
      headers: req.headers.append('API_KEY', 'xkjasgh12312312_jhed'),
    });
    console.log(`modified request with headers  ${req.headers}`);
    return next.handle(modifiedReq);
  }
}
