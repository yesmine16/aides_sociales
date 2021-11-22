import { BrowserModule } from '@angular/platform-browser';
import { Injectable, NgModule } from '@angular/core';
import { HttpClientModule, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { FormmService } from './formm.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import {DataTablesModule} from 'angular-datatables';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { Angular2CsvModule } from 'angular2-csv';
import { FilterPipe } from './filter.pipe';
import { Pipe, PipeTransform } from '@angular/core';



@Injectable()

@NgModule({

  declarations: [
    AppComponent,
    FormComponent,
    AdminComponent,
    HomeComponent,
    NoPageFoundComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    ReactiveFormsModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    TableModule,
    DropdownModule,
    ButtonModule,
    Angular2CsvModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }