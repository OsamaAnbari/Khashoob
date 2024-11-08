import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  constructor(private router: Router) {}
  
    navigateTo(route: string) { this.router.navigate([route]); }

  scrollToTarget() { 
    const targetElement = document.getElementById('products'); 
    if (targetElement) { 
      targetElement.scrollIntoView({ behavior: 'smooth' }); 
    } 
  }

  products = [
    { 
      name: 'أنظمة الإضاءة', 
      image: 'https://www.dropbox.com/scl/fi/ure2vnxul71g4dfyb08y0/Prod1.png?rlkey=wik7qujv5hu0fyfuoc6ixcxc5&st=bik0ssq4&raw=1', 
      url: '/lighting' 
    },
    { 
      name: 'العلب', 
      image: 'https://www.dropbox.com/scl/fi/xux82tyup8nfm570ho8oa/prod2.png?rlkey=4rz7ybicw70wk7mq13iyr4d0m&st=rtqpgd2s&raw=1', 
      url: '/boxes' 
    },
    { 
      name: 'اللوحات', 
      image: 'https://www.dropbox.com/scl/fi/mqlnllmnt9gcff0msmocv/prod3.png?rlkey=5hq5evjqk7y3qbh00dgncrwr5&st=uoltpzcn&raw=1', 
      url: '/frames' 
    },
    { 
      name: 'إكسسوارات', 
      image: 'https://www.dropbox.com/scl/fi/dtvxctqnb9metv7habilp/prod4.png?rlkey=jlytvwi09nhzctz0yzgc7kkts&st=b3m0l3em&raw=1', 
      url: '/accessories' 
    },
  ]
}
