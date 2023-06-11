import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ShouldLoginComponent } from './should-login.component';
import {LayoutModule} from "./layout/layout.module";
import {FuseMockApiModule} from "../@finvest/lib/mock-api/mock-api.module";
import {mockApiServices} from "./mock-api";

@NgModule({
  declarations: [
    AppComponent,
    ShouldLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule.forRoot(),
    FuseMockApiModule.forRoot(mockApiServices),
    LayoutModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
