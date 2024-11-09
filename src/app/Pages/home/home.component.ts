import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  constructor(private router: Router, private route: ActivatedRoute, private translate: TranslateService) {}

  backgroundClass = 'rtl-background';

  ngOnInit(): void { 
    this.route.paramMap.subscribe(params => { 
      const lang = params.get('lang');
      if (lang != null){
        this.translate.use(lang); 
      }
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      this.backgroundClass = lang === 'ar' ? 'rtl-background' : 'ltr-background';
      document.title = lang === 'ar' ? 'خشوب' : 'Khashoob';
    });
  }

  navigateTo(route: string) { 
    const currentUrl = this.router.url.split('/')[1]; 
    this.router.navigate([currentUrl + '/' + route]);
  }

  scrollToTarget() { 
    const targetElement = document.getElementById('products'); 
    if (targetElement) { 
      targetElement.scrollIntoView({ behavior: 'smooth' }); 
    } 
  }
}
