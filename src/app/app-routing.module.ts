import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './presentations/home/home.component';
import { FaqComponent } from './presentations/faq/faq.component';
import { MylearningComponent } from './presentations/mylearning/mylearning.component';
import { NewsComponent } from './presentations/news/news.component';
import { SimulatorComponent } from './presentations/simulator/simulator.component';

// Component
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'mylearning', component: MylearningComponent },
  { path: 'news', component: NewsComponent },
  { path: 'simulator', component: SimulatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
