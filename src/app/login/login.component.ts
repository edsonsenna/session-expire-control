import { Component, OnInit } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private idleService: BnNgIdleService
  ) { }

  ngOnInit() {

    console.log('Login component loaded...');
    
    console.log('Stopping idle watcher...');

    this.idleService.stopTimer();

  }

}
