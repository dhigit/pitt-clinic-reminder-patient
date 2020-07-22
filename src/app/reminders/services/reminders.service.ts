import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from   'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RemindersService {

  url = 'http://10.38.105.70:8080/api/reminders';

  constructor(private http: HttpClient) { }

  getAllReminders(patientId: number): Observable<any>{
    return this.http.get(
      `${this.url}/patient/${patientId}`
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
      `${this.url}/${rid}`
    ).pipe(
      map(
        result => {
          //console.log(result);
          return result;
        }
      )
    )
  }

  updateReminderStatusAsDone(rid): Observable<any>{
    let headers = new HttpHeaders({
        'Content-Type': 'application/json'
    });
    let options = {
        headers: headers
    }

    return this.http.put(
      `${this.url}/done/${rid}`,
      {},
      options
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
