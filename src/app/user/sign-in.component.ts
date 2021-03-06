import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';



@Component({
    templateUrl: "./sign-in.component.html",
    styleUrls: ["./sign-in.component.css"]
})
export class SignInComponent implements OnInit {
    user: User;
    constructor(private userService: UserService) { }
    ngOnInit() {
        this.user = new User();
    }

    signInDetailsOfUser() {
       // alert("method");
        console.log(this.user);
        let password = (<HTMLInputElement>document.getElementById("password")).value;
        let email = (<HTMLInputElement>document.getElementById("email")).value;
        
        this.userService.signInDetailsOfUser(email,password).subscribe((data) => {
            alert("Login Successful");
            console.log(data);
            if (data != null) {
                //alert("done");
             

            }
        });

    }
}
