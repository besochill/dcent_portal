import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service'
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable()
export class HttpInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newReq = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.authService.getToken()}`
      }
    })
    return next.handle(newReq)
  }
}
