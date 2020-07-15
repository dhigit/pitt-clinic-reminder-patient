import { Component, OnInit } from '@angular/core';
import { Reminder } from './reminder.model';
import { RemindersService } from './reminders.service';

@Component({
  selector: 'app-reminders',
  templateUrl: './reminders.page.html',
  styleUrls: ['./reminders.page.scss'],
})
export class RemindersPage implements OnInit {

  reminders: Reminder[];

  constructor(
    private remindersService: RemindersService
  ) { }

  ngOnInit() {
    this.reminders = this.remindersService.getAllReminders();
  }

}
