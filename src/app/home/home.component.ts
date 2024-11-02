import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products = [
    { 
      name: 'Product 1', 
      image: 'assets/images/product1.jpg', 
      description: 'This is a description of Product 1.' 
    },
    { 
      name: 'Product 2', 
      image: 'assets/images/product2.jpg', 
      description: 'This is a description of Product 2.' 
    },
    { 
      name: 'Product 3', 
      image: 'assets/images/product3.jpg', 
      description: 'This is a description of Product 3.' 
    },
  ]
}
