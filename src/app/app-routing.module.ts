import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RecordComponent} from './record/record.component';
import {ProductsComponent} from './products/products.component';
import {TeachComponent} from './teach/teach.component';
import {DownloadComponent} from './download/download.component';
import {ContactComponent} from './contact/contact.component';
import {UserInfoComponent} from './user-info/user-info.component';
import {UpdateUserInfoComponent} from './update-user-info/update-user-info.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'record', component: RecordComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'teach', component: TeachComponent },
  { path: 'download', component: DownloadComponent },
  { path: 'contact', component: ContactComponent },

  { path: 'userInfo', component: UserInfoComponent },
  { path: 'updateUserInfo', component: UpdateUserInfoComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule { }
