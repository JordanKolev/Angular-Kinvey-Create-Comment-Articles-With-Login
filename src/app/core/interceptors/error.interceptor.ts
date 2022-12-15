import {
  HttpResponse,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()

export class ErrorInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          if (err.status === 401) {
            this.toastr.error(err.error.description);
            this.router.navigate['/login'];
          }
          return throwError(err);
        })
      );
  }
}
