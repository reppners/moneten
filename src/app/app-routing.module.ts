import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LandingComponent} from "./landing/landing.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {IncomeComponent} from "./income/income.component";
import {PersonComponent} from "./person/person.component";
import {SpendingsComponent} from "./spendings/spendings.component";
import {SavingsComponent} from "./savings/savings.component";
import {DebtsComponent} from "./debts/debts.component";

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'debts', component: DebtsComponent},
  {path: 'income', component: IncomeComponent},
  {path: 'person', component: PersonComponent},
  {path: 'savings', component: SavingsComponent},
  {path: 'spendings', component: SpendingsComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
