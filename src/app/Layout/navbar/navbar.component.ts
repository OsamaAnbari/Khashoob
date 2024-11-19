import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private location: Location) {}

  logo: string = 'Images/logo.png';

  ngOnInit(): void { 
    this.route.paramMap.subscribe(params => { 
      const lang = params.get('lang');
      this.logo = lang === 'ar' ? 'Images/logo.png' : 'Images/logo-EN.png';
    });
  }

  navigateTo(route: string) { 
    const currentUrl = this.router.url.split('/')[1]; 
    this.router.navigate([currentUrl + '/' + route]);
  }

  changeLanguage(lang: string) { 
    let url = this.location.path(); 
    url = url.replace('/en', lang);
    url = url.replace('/ar', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.title = lang === 'ar' ? 'خشوب' : 'Khashoob';
    this.logo = lang === 'ar' ? 'Images/logo.png' : 'Images/logo-EN.png';
    this.router.navigateByUrl(url);
  }

  scrollToTarget(target: string) { 
    const targetElement = document.getElementById(target); 
    if (targetElement) { 
      targetElement.scrollIntoView({ behavior: 'smooth' }); 
    } 
  }
}
