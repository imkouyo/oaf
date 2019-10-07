import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Observable } from 'rxjs';
import { User } from './model/user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  user$: Observable<User>;

  constructor(private authService: AuthService) {

  }
  ngOnInit(): void {
    
  }
}
