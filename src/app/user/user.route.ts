import{Routes} from "@angular/router"
import { ConfirmBookingComponent } from './confirm-booking.component';
import { UserSignUpComponent } from './sign-up.component';
import { SignInComponent } from './sign-in.component';


export const userRoutes:Routes=[
{path:"user/signUp",component:UserSignUpComponent},
{path:"user/signIn",component:SignInComponent},
{path:"user/confirm-booking",component:ConfirmBookingComponent}
];