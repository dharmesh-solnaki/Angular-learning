import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEventType,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchScan, tap } from 'rxjs/operators';
import { Employee } from '../employee/employee.model';

export class ResponseInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any | Employee>,
    next: HttpHandler
  ): Observable<any> {
    return next.handle(req).pipe(
    
      catchError((error: HttpErrorResponse) => {
        let errorMssg = 'Unknown error';
        switch (error.status) {
          case 400:
            errorMssg = 'Bad Request';
            break;
          case 401:
            errorMssg = 'Unauthorized';
            break;
          case 403:
            errorMssg = 'Forbidden by server';
            break;
          case 404:
            errorMssg = 'Not Found';
            break;
          case 500:
            errorMssg = 'Internal Server Error';
            break;

          default:
            // Default case for other HTTP errors
            errorMssg = 'Client-side error or unknown server error';
            break;
        }
        if (error.error instanceof ErrorEvent) {
          // Client-side error
          errorMssg = `Client Error: ${error.error.message}`;
        } else if (error.error && error.error.message) {
          // Server-side error with message
          errorMssg = error.error.message;
        }
        return throwError(() => errorMssg);
      })
    );  
  }
}
