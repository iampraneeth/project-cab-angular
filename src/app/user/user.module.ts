import { NgModule }
    from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { BookRideComponent } from './book-Ride.component';



import { RideNowComponent } from './ride-Now.component';

import { SelectDriverComponent } from './select-driver.component';

import { ConfirmBookingComponent } from './confirm-booking.component';
import { UserSignUpComponent } from './sign-up.component';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.route';
import { SignInComponent } from './sign-in.component';
import { UserService } from './user.service';

import { FormsModule} from '@angular/forms';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@NgModule({

    declarations: [


        BookRideComponent,
        RideNowComponent,
        SelectDriverComponent,
        ConfirmBookingComponent,
        UserSignUpComponent,
        SignInComponent

    ],

    imports: [
        HttpClientModule,
        FormsModule,
        BrowserModule,
        RouterModule.forChild(userRoutes)
    ],

    exports: [
        BookRideComponent,
        RideNowComponent,
        SelectDriverComponent,
        ConfirmBookingComponent,
        UserSignUpComponent,
        SignInComponent,
        RouterModule
    ],
    providers: [UserService]
})

export class UserModule {

}
