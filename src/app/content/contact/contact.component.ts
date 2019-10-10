import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter, Directive } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ContactComponent implements OnInit {


  @Output() ToggledContact = new EventEmitter<boolean>();

  grecaptcha: any;
  show: boolean;
  sideNav: any;
  toggled = false;
  toggledContact = true;

  constructor() { }

  ngOnInit() {
   }


  toggle() {
    this.toggledContact = !this.toggledContact;
    this.ToggledContact.emit(this.toggledContact);
  }

}
