import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';
declare function initFunction();
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
  // theme: string = "./assets/css/colors/purple-dark.css";
  constructor(private settingService: SettingsService ) { 


  }

  ngOnInit(): void {
    // if (localStorage.getItem('theme')) {
    //   this.theme = localStorage.getItem('theme');
    //   this.linkTheme.setAttribute('href', this.theme);
    // } else {
    //   this.linkTheme.setAttribute('href', this.theme);
    // }
    initFunction();
    
  }


}
