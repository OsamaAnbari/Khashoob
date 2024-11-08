import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-lighting',
  templateUrl: './lighting.component.html',
  styleUrl: './lighting.component.css'
})
export class LightingComponent {
  
  constructor(private router: Router, private route: ActivatedRoute, private translate: TranslateService) {}
  
  ngOnInit(): void { 
    this.route.paramMap.subscribe(params => { 
      const lang = params.get('lang');
      if (lang != null){
        this.translate.use(lang); 
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      }
    }); 
  }
}
