import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from   'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RemindersService {

  url = 'http://localhost:8080/api/reminders';

  constructor(private http: HttpClient) { }

  getAllReminders(patientId: number): Observable<any>{
    return this.http.get(
      this.url + '/patient/' + patientId
    ).pipe(
      map(
        results => {
          //console.log(results);
          return results;
        }
      )
    )
  }

  getReminder(rid: number): Observable<any>{
    return this.http.get(
      this.url + '/' + rid
    ).pipe(
      map(
        result => {
          //console.log(result);
          return result;
        }
      )
    )
  }


}
