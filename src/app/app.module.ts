import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FlexLayoutModule} from "@angular/flex-layout";

import {AppComponent} from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
import {registerLocaleData} from "@angular/common";
import localeDe from '@angular/common/locales/de';
import {MatDividerModule} from "@angular/material/divider";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";
import {MatSliderModule} from "@angular/material/slider";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import { PersonComponent } from './person/person.component';
import { EmployerWageGridComponent } from './employer-wage-grid/employer-wage-grid.component';
import { EmployerWageConfigurationComponent } from './employer-wage-configuration/employer-wage-configuration.component';
import { EmployerWageChangeComponent } from './employer-wage-change/employer-wage-change.component';
import { IncomeComponent } from './income/income.component';
import { DebtsComponent } from './debts/debts.component';
import { SavingsComponent } from './savings/savings.component';
import { SpendingsComponent } from './spendings/spendings.component';
import { LandingComponent } from './landing/landing.component';
import {CoreModule} from "./@core/core.module";
import {SharedModule} from "./@shared/shared.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

registerLocaleData(localeDe);

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    EmployerWageGridComponent,
    EmployerWageConfigurationComponent,
    EmployerWageChangeComponent,
    IncomeComponent,
    DebtsComponent,
    SavingsComponent,
    SpendingsComponent,
    LandingComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
