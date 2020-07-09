import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
//import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
//import { FroalaEditorModule } from 'ng2-froala-editor/ng2-froala-editor'; 

import { ToastyModule } from 'ng2-toasty';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';

import { DataTableModule } from "angular2-datatable";
import { MyDatePickerModule } from 'mydatepicker';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { TinymceModule } from 'angular2-tinymce';
//import { logInService } from "./service/logIn.service";
//import { HomeService } from "./service/home.service";




@NgModule({
    imports: [TinymceModule.withConfig({}), Ng2TableModule, BrowserModule, ReactiveFormsModule, HttpModule, routing, Ng2Bs3ModalModule,
        FormsModule, DataTableModule, MyDatePickerModule, ToastyModule.forRoot()],
    declarations: [AppComponent],
    providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    bootstrap: [AppComponent]

})
export class AppModule { }