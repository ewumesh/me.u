import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 

import { AppComponent } from 'src/app/app.component';
import { AppRoutingModule } from 'src/app/app.routing.module';
import { FooterComponent } from 'src/app/modules/footer/footer.component';
import { NavigationComponent } from 'src/app/modules/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [NavigationComponent]
})
export class AppModule { }
