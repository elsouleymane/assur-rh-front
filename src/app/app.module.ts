import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router'; // Corrigé l'import pour Routes
// Page Route
import { AppRoutingModule } from './app-routing.module';

// toaster
import { ToastrModule } from 'ngx-toastr';

// Auth
import { HttpClientModule } from '@angular/common/http';

// Components
import { AppComponent } from './app.component';
import { FaqComponent } from './presentations/faq/faq.component';
import { HomeComponent } from './presentations/home/home.component';
import { SimulatorComponent } from './presentations/simulator/simulator.component';
import { MylearningComponent } from './presentations/mylearning/mylearning.component';
import { NewsComponent } from './presentations/news/news.component';

import { FullCalendarModule } from '@fullcalendar/angular'; 
import { AlertModule } from 'ngx-bootstrap/alert';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgxSimplebarModule } from 'ngx-simplebar';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { CalendarComponent } from './presentations/calendar/calendar.component';


// Définition des routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'simulator', component: SimulatorComponent },
  // {path: 'calendar', component: CalendarComponent},
  { path: 'mylearning', component: MylearningComponent },
  { path: 'news', component: NewsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes), // Configuration du routeur ici
    HomeComponent,
    FaqComponent,
    MylearningComponent,
    NewsComponent,
    SimulatorComponent,
    FullCalendarModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
    FlatpickrModule.forRoot(),
    NgxSimplebarModule,
    NgxDropzoneModule,

  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
