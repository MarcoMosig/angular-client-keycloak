import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShouldLoginComponent } from './should-login.component';

@NgModule({
  declarations: [
    AppComponent,
    ShouldLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
