import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatTableModule} from "@angular/material/table";
import {MatCardModule} from "@angular/material/card";
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
import {FlexLayoutModule} from "@angular/flex-layout";

const IMPORT_EXPORT_MODULES = [
  CommonModule,
  BrowserAnimationsModule,
  FlexLayoutModule,
  MatTableModule,
  MatCardModule,
  MatDividerModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatSelectModule,
  FormsModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSliderModule,
  MatDatepickerModule,
  MatNativeDateModule,
]

@NgModule({
  declarations: [],
  imports: [
    ...IMPORT_EXPORT_MODULES,
  ],
  exports: [
    ...IMPORT_EXPORT_MODULES
  ]
})
export class SharedModule { }
