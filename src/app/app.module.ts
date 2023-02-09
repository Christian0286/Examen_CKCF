import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/component/navbar/navbar.component';
import { HeaderComponent } from './components/component/header/header.component';
import { SectionImgComponent } from './components/component/section-img/section-img.component';
import { FooterComponent } from './components/component/footer/footer.component';
import { SectionComponent } from './components/component/section/section.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    SectionImgComponent,
    FooterComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
