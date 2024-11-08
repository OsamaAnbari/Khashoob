import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router, private route: ActivatedRoute, private location: Location) {}

  navigateTo(route: string) { 
    const currentUrl = this.router.url.split('/')[1]; 
    this.router.navigate([currentUrl + '/' + route]);
  }

  changeLanguage(lang: string) { 
    let url = this.location.path(); 
    url = url.replace('/en', lang); // Change 'en' to 'ar' 
    url = url.replace('/ar', lang); // Change 'en' to 'ar' 
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    this.router.navigateByUrl(url);
  }
}
