import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShouldLoginComponent } from './should-login.component';
import { LayoutModule } from "./layout/layout.module";
import { FuseMockApiModule } from "../@finvest/lib/mock-api/mock-api.module";
import { mockApiServices } from "./mock-api";
import { FinvestModule } from '@finvest';

@NgModule({
  declarations: [
    AppComponent,
    ShouldLoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    FuseMockApiModule.forRoot(mockApiServices),
    LayoutModule,
    FinvestModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
