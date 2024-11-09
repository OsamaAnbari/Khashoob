import { Component, Input } from '@angular/core';

declare var bootstrap: any; // Ensure Bootstrap JS is available

@Component({
  selector: 'app-image-modal',
  templateUrl: './image-modal.component.html',
  styleUrl: './image-modal.component.css'
})
export class ImageModalComponent {
  @Input() imageSrc: string | null = null;

  showModal(): void {
    const modalElement = document.getElementById('sharedImageModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
  }
}
