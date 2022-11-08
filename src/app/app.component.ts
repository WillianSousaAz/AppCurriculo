import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private router: Router,
    private plataform: Platform
  ) {

    this.initializeApp();

  }

  initializeApp(){
    this.plataform.ready().then(() => {
      this.router.navigateByUrl('splash');
    });
  }
}
