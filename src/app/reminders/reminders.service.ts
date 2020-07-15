import { Injectable } from '@angular/core';
import { Reminder } from './reminder.model';

@Injectable({
  providedIn: 'root'
})
export class RemindersService {

  private reminders: Reminder[] =[
    {
      rid: 1,
      title: "Title 1",
      desc: "Test Gan 1",
      createdDate: new Date("2020-07-15 13:14:56")
    },
    {
      rid: 2,
      title: "Title 2",
      desc: "Test Gan 2",
      createdDate: new Date("2020-07-15 13:14:56")
    },
    {
      rid: 3,
      title: "Title 2",
      desc: "Test Gan 3",
      createdDate: new Date("2020-07-15 13:14:56")
    }
  ];
  
  constructor() { }

  getAllReminders(){
    return [...this.reminders];
  }

  getReminder(rid: number){
    return {
      ...this.reminders.find(reminder => {
        return reminder.rid === rid;
      })
    };
  }

  deleteReminder(rid: number){
    this.reminders = this.reminders.filter(reminder => {
      return reminder.rid !== rid;
    });
  }
}
