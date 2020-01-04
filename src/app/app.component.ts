import { Component, OnInit } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'session-expire';

  constructor(
    private idleService: BnNgIdleService,
    private router: Router
  ) { }

  ngOnInit() {

    console.log('Expiring session in 3 seconds...')

    this.idleService.startWatching(3).subscribe((isUserInactive) => {

      if (isUserInactive) {

        console.log('Session expired...');

        const currentRoute = this.router.url;

        if(currentRoute !== '/login') {

          console.log('Redirecting to login screen...')
  
          this.router.navigateByUrl('/login');
          this.idleService.resetTimer();
  
        }

      }

    });
  }
}
