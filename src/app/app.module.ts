import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyA7uEQKxfRbiwMuX7GkLWB01mwtP_IBiAw',
  authDomain: 'wave-2-us.firebaseapp.com',
  databaseURL: 'https://wave-2-us.firebaseio.com',
  projectId: 'wave-2-us',
  storageBucket: 'wave-2-us.appspot.com',
  messagingSenderId: '1080589429686'
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
