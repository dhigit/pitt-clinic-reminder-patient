import { Component, OnInit } from '@angular/core';
import { Reminder } from './reminder.model';
import { RemindersService } from './services/reminders.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.page.html',
  styleUrls: ['./reminders.page.scss'],
})
export class RemindersPage implements OnInit {

  patientId = -1;
  results: Observable<any>;

  constructor(
    private remindersService: RemindersService,
    private router: Router
  ) { }

  ngOnInit() {
    if (!localStorage.length){
      this.router.navigate([`/login`]);
    }else{
      this.patientId = +localStorage.getItem("authID");
    }
    this.results = this.getReminders();
  }

  ionViewWillEnter() {
    this.results = this.getReminders();
  }


  getReminders(): Observable<any>{
    return this.remindersService.getAllReminders(this.patientId);
  }

  doRefresh(event) {
    this.results = this.getReminders();
    event.target.complete();
  }

  logout(){
    this.router.navigate([`/login`]);
  }

}
