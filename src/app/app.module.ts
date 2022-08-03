import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from '@angular/material/divider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { SavedSuccessComponent } from './saved-success/saved-success.component';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SavedSuccessComponent
  ],
  imports: [
    MatSelectModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatStepperModule,MatFormFieldModule,MatDividerModule,MatInputModule, MatIconModule
  ],
 
  providers: [  MatIconRegistry],
  bootstrap: [AppComponent],
})
export class AppModule { }
