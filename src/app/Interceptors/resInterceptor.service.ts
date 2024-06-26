import {
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpEventType,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Employee } from '../employee/employee.model';

export class ResponseInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any | Employee>,
    next: HttpHandler
  ): Observable<any> {
    return next.handle(req).pipe(
      tap((event) => {
        if (event.type === HttpEventType.Response) {
          console.log('Response intercepted:', event);
          console.log('Response headers:', event.headers);
        }
      }),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Unknown error occurred';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // Server-side err

          errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.error('Error occurred in interceptor:', error);

        return throwError(() => `Something went wrong: ${error} `);
      })
    );
  }
}
