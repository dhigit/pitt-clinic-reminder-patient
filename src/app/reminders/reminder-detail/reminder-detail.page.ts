import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RemindersService } from '../reminders.service';
import { Reminder } from '../reminder.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-reminder-detail',
  templateUrl: './reminder-detail.page.html',
  styleUrls: ['./reminder-detail.page.scss'],
})
export class ReminderDetailPage implements OnInit {

  loadedReminder: Reminder;

  constructor(
    private activatedRoute: ActivatedRoute,
    private remindersService: RemindersService,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('rid')){
        this.router.navigate(['/reminders']);
        return;
      }

      const rid = paramMap.get('rid');
      this.loadedReminder = this.remindersService.getReminder(+rid);
    });
  }

  onDeleteReminder() {
    this.alertCtrl.create({
      header: "Delete warning",
      message: "Are you sure to delete this?",
      buttons:[{
        text:'Cancel',
        role: 'cancel'
      },{
        text: 'Delete',
        handler: ()=>  {
          this.remindersService.deleteReminder(this.loadedReminder.rid);
          this.router.navigate(['/reminders']);
        }
      }]
    }).then(alertEl => {
      alertEl.present();
    });
    
  }

}
