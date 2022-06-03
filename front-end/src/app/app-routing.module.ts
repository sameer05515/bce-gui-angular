import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClickCounterComponent } from './components/click-counter/click-counter.component';
import { FileSearchComponent } from './components/file-search/file-search.component';
import { GlobalSettingsComponent } from './components/global-settings/global-settings.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch:'full'},
  { path: 'home', component: HomeComponent },
  {path: 'click-counter', component: ClickCounterComponent},
  {path:'global-settings', component: GlobalSettingsComponent},
  {path:'file-search', component: FileSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
