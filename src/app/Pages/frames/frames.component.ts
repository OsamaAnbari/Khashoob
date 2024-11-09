import { Component, HostListener, ViewChild } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ImageModalComponent } from '../../Layout/image-modal/image-modal.component';

@Component({
  selector: 'app-frames',
  templateUrl: './frames.component.html',
  styleUrl: './frames.component.css'
})
export class FramesComponent {
  constructor(private router: Router, private route: ActivatedRoute, private translate: TranslateService) {}
  
  ngOnInit(): void { 
    this.route.paramMap.subscribe(params => { 
      const lang = params.get('lang');
      if (lang != null){
        this.translate.use(lang); 
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        document.title = lang === 'ar' ? 'خشوب' : 'Khashoob';
      }
    }); 
  }

  @ViewChild('imageModal') imageModal!: ImageModalComponent;

  openModal(img: string): void {
    this.imageModal.imageSrc = img;
    this.imageModal.showModal();
  }

  isLargeScreen: boolean = window.innerWidth > 768;

  @HostListener('window:resize', ['$event']) 
  onResize(event: Event) { 
    this.isLargeScreen = window.innerWidth > 768;
  }
}
