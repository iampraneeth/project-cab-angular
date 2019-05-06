import { Component, OnInit } from "@angular/core";
import { User } from './user';
import { UserService } from './user.service';
@Component({
    selector: "UserSignUpComponent",
    templateUrl: "./sign-up.component.html",
})
export class UserSignUpComponent implements OnInit {
    user:User;
    constructor(private userService: UserService){}
    ngOnInit(){
        this.user= new User();
    }
  
    
  
    signUpDetailsOfUser(){
        alert("method");
          console.log(this.user);
        this.userService.signUpDetailsOfUser(this.user).subscribe((data)=>{
             console.log("success");
             console.log(data);
             if(data!=null){
                alert("done");
                
             }
        });

}

}