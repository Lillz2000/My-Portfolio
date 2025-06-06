import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { AppModule } from './app-module';

@NgModule({
    imports: [
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AppModule
    ]
})