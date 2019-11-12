import { Component, HostListener, ElementRef, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
  animations: [
    trigger('scrollAnimation', [
      state('true', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      state('false', style({
        opacity: 0,
        transform: 'translateY(-100%)'
      })),
      transition('true => false', animate('300ms ease-out')),
      transition('false => true', animate('200ms ease-in'))
    ]),
    trigger('open', [
      state(
        'closed',
        style({
          opacity: 1,
          transform: 'translateX(0)'
        })
      ),
      state(
        'open',
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        })
      ),
      transition('closed => open', animate('300ms ease-out')),
      transition('open => closed', animate('200ms ease-in'))
    ])
  ]
})
export class NavbarComponent {

  @Output() ToggledContact = new EventEmitter<boolean>();

  sideNav: any;
  toggled = false;
  toggledContact = true;
// scroll hide animation
  state = 'true';
  show: boolean;


  constructor(
    public el: ElementRef,
    private meta: Meta) { }


  @HostListener('window:scroll', [])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition <= componentPosition) {
      this.state = 'true';
      this.show = true;
    } else {
      this.state = 'false';
      this.show = false;
    }
  }
  openNav() {
    this.show = true;
  }

  closeNav() {
    document.getElementById('sideNav').style.width = '0px';
    document.body.style.maxWidth = null;
    document.body.style.right = null;
    this.show = false;
  }

  toggle() {
    let toggle: boolean;
    toggle = !this.toggledContact;
    this.ToggledContact.emit(toggle);
  }
  removeMetaTags() {
    this.meta.removeTag('itemprop = "name"');
    this.meta.removeTag('itemprop = "description"');
    this.meta.removeTag('itemprop = "image"');
  }

}
