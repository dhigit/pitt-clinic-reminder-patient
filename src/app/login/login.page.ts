import { Component, OnInit } from '@angular/core';
import { Login } from '../reminders/models/login';
import { AuthService } from '../reminders/services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private loginService: AuthService,
    private alertCtrl: AlertController,
    private router: Router
  ) { }

  loginModel = new Login('', '');
  
  ngOnInit() {
    localStorage.clear();
  }

  login(){
    this.loginService.postLogin(this.loginModel).subscribe(result =>{
      
      if (result.status=="AUTHORIZED" && result.role=="patient"){
        localStorage.setItem("authID", result.ID);
        this.router.navigate([`/reminders`]);
      }else{
        this.onLoginFailure();
      }
    });
  }

  onLoginFailure() {
    this.alertCtrl.create({
      header: "Login Failed",
      message: "Wrong username or password",
      buttons:[{
        text:'Dismiss',
        role: 'cancel'
      }]
    }).then(alertEl => {
      alertEl.present();
    });
    
  }
}
