import { Component, OnInit } from '@angular/core';
import { Reminder } from './reminder.model';
import { RemindersService } from './services/reminders.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.page.html',
  styleUrls: ['./reminders.page.scss'],
})
export class RemindersPage implements OnInit {

  patientId = 1001;
  results: Observable<any>;

  constructor(
    private remindersService: RemindersService
  ) { }

  ngOnInit() {
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

}
