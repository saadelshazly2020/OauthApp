import { Component, OnInit } from "@angular/core"
//import { Events } from 'ionic-angular';
import { DOCUMENT } from '@angular/platform-browser';
import { Routes, RouterModule, Router } from '@angular/router';

@Component({
    selector: "user-app",
    template: `

                <div>
                     <ng2-toasty></ng2-toasty>


                        <router-outlet></router-outlet>
                    
                 </div>

                `
})

export class AppComponent implements OnInit {
    public translatedText: string;
    public supportedLanguages: any[];
    
    constructor(private router: Router) {
        //event.subscribe('showLogout', () => {
        //    this.showLogout();

        //});
    }

    ngOnInit() {
        // standing data
        this.supportedLanguages = [
            { display: 'English', value: 'en' },
            { display: 'Arabic', value: 'ar' }

        ];

        // set current langage
        this.selectLang('en');
    }
    isCurrentLang(lang: string) {
        // check if the selected lang is current lang
        //return lang === this._translate.currentLang;
    }

    selectLang(lang: string) {
        // set current lang;
        //this._translate.use(lang);
        //this.refreshText();
    }
     //refreshText() {
    //    // refresh translation when language change
    //    this.translatedText = this._translate.instant('hello world');
    //}
   

}