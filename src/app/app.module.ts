import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { EditPageComponent } from './edit-page/edit-page.component';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { DataService } from './data-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';

const appRoutes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'edit/:id', component: EditPageComponent },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    EditPageComponent, FilterPipe
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    // other imports here
    SweetAlert2Module.forRoot({
      buttonsStyling: true,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn '
    })

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
