import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { ProfileComponent } from './profile/profile.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StudantSubscribeComponent } from './studant-subscribe/studant-subscribe.component';

const routes: Routes = [
  {path:"" , redirectTo:"overview", pathMatch:"full"},
  {path:"overview" , component:OverviewComponent},
  {path:"profile" , component:ProfileComponent},
  {path:"withdraw" , component:WithdrawComponent},
  {path:"overview/studentSubscribe" , component:StudantSubscribeComponent},
  {path:"**" , component:NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
