import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  loginsystem(e) {
    console.log(e);
  }

  onclick() {

    if (this.username !== undefined && this.password !== undefined) {
          console.log("Clicked treu", this.username, this.password);
          localStorage.setItem("currentUser",this.username );
         this.router.navigate(["/dashboard/fullview"]);
        
    } else {
      console.log("Clicked", this.username, this.password);

    }

  }

}
