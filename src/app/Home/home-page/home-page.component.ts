import { Component,OnInit, Renderer2, HostListener } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkScroll();
  }

  private checkScroll(): void {
    const navbar = document.getElementsByClassName('text')[0];
    if (window.scrollY < 50) {
      this.renderer.addClass(navbar, 'slide-in-left');
    } else {
      this.renderer.removeClass(navbar, 'slide-in-left');
    }
  }
}
