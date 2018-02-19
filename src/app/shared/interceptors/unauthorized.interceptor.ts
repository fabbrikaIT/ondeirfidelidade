import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpResponse,
    HttpErrorResponse,
    HttpProgressEvent,
    HttpSentEvent,
    HttpHeaderResponse,
    HttpUserEvent
} from "@angular/common/http";
import "rxjs/add/operator/do";
import { Observable } from "rxjs/Observable";

import { LoginResultEntity } from '../models/auth/loginResult.model';


@Injectable()
export class UnauthorizedInterceptor implements HttpInterceptor {
    public loginInfo: LoginResultEntity = JSON.parse(
        localStorage.getItem("loginInfo")
    );

    constructor(private router: Router) {}

    private EndSession() {
        localStorage.removeItem("isLoggedin");
        localStorage.removeItem("loginInfo");
        this.router.navigate(["login"]);
    }

    intercept(
        request: HttpRequest<any>,
        next: HttpHandler
    ): Observable<
        | HttpSentEvent
        | HttpHeaderResponse
        | HttpProgressEvent
        | HttpResponse<any>
        | HttpUserEvent<any>
    > {
        // let token: string;

        // if (localStorage.getItem("loginInfo") === null) {
        //     token = this.config.ApiAppToken;
        // } else {
        //     this.loginInfo = JSON.parse(localStorage.getItem("loginInfo"));

        //     token = "Basic " + btoa(this.loginInfo.authenticationToken);
        // }

        // request = request.clone({
        //     setHeaders: {
        //         Authorization: token,
        //         "Content-Type": "application/json"
        //     }
        // });

        return next.handle(request).do(
            (event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                }
            },
            (err: any) => {
                if (err instanceof HttpErrorResponse) {
                    if (err.status === 401) {
                        // redirect to the login route
                        this.EndSession();
                    } else if (err.status === 500) {
                        const body = err.error;

                        if (body.errorCode !== "" && body.errorMessage === "Unauthorized access") {
                            // redirect to the login route
                            this.EndSession();
                        }
                    }
                }
            }
        );
    }
}
