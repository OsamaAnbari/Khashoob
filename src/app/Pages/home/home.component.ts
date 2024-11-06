import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  scrollToTarget() { 
    const targetElement = document.getElementById('products'); 
    if (targetElement) { 
      targetElement.scrollIntoView({ behavior: 'smooth' }); 
    } 
  }

  products = [
    { 
      name: 'أنظمة الإضاءة', 
      image: 'https://i.ibb.co/vPtJbZR/Prod1.png', 
      url: ' 1.' 
    },
    { 
      name: 'العلب', 
      image: 'https://i.ibb.co/5h5hBzP/prod2.png', 
      url: ' 2.' 
    },
    { 
      name: 'اللوحات', 
      image: 'https://i.ibb.co/Bt5FHkV/prod3.png', 
      url: ' 3.' 
    },
    { 
      name: 'إكسسوارات', 
      image: 'https://i.ibb.co/qMBnmd2/prod4.png', 
      url: ' 3.' 
    },
  ]
}
