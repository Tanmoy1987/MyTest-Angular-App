import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { NotFoundError } from '../error-handler/not-found-error';
import { BadInputError } from '../error-handler/bad-input-error';
import { AppError } from '../error-handler/app-error';
/*
@Injectable({
  providedIn: 'root'
})
*/
export class DataService {

  constructor(private url: string
              , private http: HttpClient) { }

  
  getAll(): Observable<any> {
    return this.http.get(this.url).pipe(
      map((response: any) => response)
      , catchError((error: any) => this.handleError(error))
    );
  }

  create(obj: any): Observable<any> {
    return this.http.post(this.url, obj).pipe(
     catchError((error: any) => this.handleError(error))
    );
  }

  update(obj: any): Observable<any> {
    return this.http.put(this.url + "/" + obj.id, obj).pipe(
      catchError((error: any) => this.handleError(error))
     );
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.url + "/" + id).pipe(
      catchError((error: any) => this.handleError(error))
     );
  }

  private handleError(error: Response) {
    console.log(error);
    if(error.status === 404) 
       return throwError(new NotFoundError(error));
    if(error.status === 400) 
       return throwError(new BadInputError(error));

    return throwError(new AppError(error));
  }
}
