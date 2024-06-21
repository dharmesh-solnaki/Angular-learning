import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEventType,
} from '@angular/common/http';
import { tap } from 'rxjs';
import { Employee } from '../employee/employee.model';

export class ResponseInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any | Employee>, next: HttpHandler) {
    return next.handle(req).pipe(
      tap((event) => {
        console.log('event from interceptorr', event.type);
        if (event.type == HttpEventType.Response) {
          console.log('event header :', event.headers);
        }
      })
    );
  }
}
