import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { ProfileComponent } from './profile/profile.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { StudantSubscribeComponent } from './studant-subscribe/studant-subscribe.component';

const routes: Routes = [
  { path: "", redirectTo: "overview", pathMatch: "full" },
  { path: "overview", component: OverviewComponent, data: { title: "Overview" } },
  { path: "profile", component: ProfileComponent, data: { title: "Profile" } },
  { path: "withdraw", component: WithdrawComponent, data: { title: "Withdraw" } },
  { path: "overview/studentSubscribe", component: StudantSubscribeComponent, data: { title: "Student Subscribe" } },
  { path: "**", component: NotFoundComponent, data: { title: "Not Found" } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
