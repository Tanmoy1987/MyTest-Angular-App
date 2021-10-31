import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, of } from "rxjs";


export class fakeBackendFactory implements HttpInterceptor {

    token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6InRhbm1veSIsImlhdCI6MTUxNjIzOTAyMn0.sUyFSIB8oiHkp5AHJO6sGM9ZV9uyUl81q_FJoV6vgTU";

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(request.url.endsWith("api/authenticate") && request.method === "POST") {
            //this.delay(4000);
            if(this.authenticate(request.body))
               return of(new HttpResponse({ body: {'token': this.token}}));
            return of(new HttpResponse({ body: {'token': null}}));
        }
        else {
            return next.handle(request);
        }
        /*if(request.url.endsWith("api/authenticate") && request.method === "POST") {
            return new Observable(ob => {
                setTimeout(() => {
                    if(this.authenticate(request.body))
                       return new HttpResponse({ body: {'token': this.token}});
                    return new HttpResponse({ body: {'token': null}});                   
                }, 4000)
            });
        }
        else {
            return next.handle(request);
        }*/
    }

    private authenticate(body: any) : boolean{
        return (body.username === "tanmoy" && body.password === "1234")
    }

    async delay(ms: number) {
        await new Promise(resolve => {
            setTimeout(() => { 
                resolve (1); 
            }, ms);
        }).then(()=> {console.log('delay '+ ms + " ms")});
    }
}