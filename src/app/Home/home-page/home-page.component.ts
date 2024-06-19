import { Component, AfterViewInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

declare const $:any;
declare const WOW:any;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  onTranslated(): void {
    const activeSlides = document.querySelectorAll('.owl-item.active .slide-in-left');
    activeSlides.forEach(slide => {
      const element = slide as HTMLElement;
      element.classList.remove('slide-in-left');
      void element.offsetWidth;
      element.classList.add('slide-in-left');
    });
  }
  customOptions: OwlOptions = {
    loop: true,
    autoplay:true, 
    slideTransition: 'linear',
    autoplayTimeout:7000,
    autoplaySpeed:2000,
    autoplayHoverPause:false,
    autoWidth:true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true,
  }
}
