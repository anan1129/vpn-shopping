import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { RecordComponent } from './record/record.component';
import { HelpComponent } from './help/help.component';
import { DownloadComponent } from './download/download.component';
import { TeachComponent } from './teach/teach.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UpdateUserInfoComponent } from './update-user-info/update-user-info.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    RecordComponent,
    HelpComponent,
    DownloadComponent,
    TeachComponent,
    UserInfoComponent,
    UpdateUserInfoComponent,
    LoginComponent,
    RegisterComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
