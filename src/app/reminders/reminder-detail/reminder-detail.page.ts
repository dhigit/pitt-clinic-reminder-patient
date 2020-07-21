import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RemindersService } from '../services/reminders.service';
import { Reminder } from '../reminder.model';
import { AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reminder-detail',
  templateUrl: './reminder-detail.page.html',
  styleUrls: ['./reminder-detail.page.scss'],
})
export class ReminderDetailPage implements OnInit {

  loadedReminder = null;
  rid = -1;
  constructor(
    private activatedRoute: ActivatedRoute,
    private remindersService: RemindersService,
    private alertCtrl: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    
    if (!localStorage.length){
      this.router.navigate([`/login`]);
    }

    this.rid = +this.activatedRoute.snapshot.paramMap.get('rid');

    this.remindersService.getReminder(this.rid).subscribe(result => {
      this.loadedReminder = result;
    });
  }

  onDeleteReminder() {
    this.alertCtrl.create({
      header: "Message",
      message: "Are you sure to mark this reminder as done?",
      buttons:[{
        text:'Cancel',
        role: 'cancel'
      },{
        text: 'Mark as done',
        handler: ()=>  {

          this.remindersService.updateReminderStatusAsDone(this.rid).subscribe(result => {
            this.loadedReminder = result;
          });
        }
      }]
    }).then(alertEl => {
      alertEl.present();
    });
    
  }

}
