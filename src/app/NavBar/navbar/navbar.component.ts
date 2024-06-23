import { Component, OnInit, Renderer2, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.checkScroll();
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkScroll();
  }

  private checkScroll(): void {
    const navbar = document.getElementsByClassName('navbar')[0];
    if (window.scrollY < 50) {
      this.renderer.addClass(navbar, 'bg-transparent');
    } else {
      this.renderer.removeClass(navbar, 'bg-transparent');
    }
  }
}
