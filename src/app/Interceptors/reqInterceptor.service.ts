import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

export class RequestInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.headers.get('skip') == 'true') {
      return next.handle(req);
    }
    const authToken = localStorage.getItem('authToken');
    // console.log(`request with this url is just made  ${req.url}`);
    const modifiedReq = req.clone({
      headers: authToken
        ? req.headers.append('Authorization', `Bearer ${authToken}`)
        : req.headers,
    });
    // console.log(`modified request with headers  ${req.headers}`);
    return next.handle(modifiedReq);
  }
}
