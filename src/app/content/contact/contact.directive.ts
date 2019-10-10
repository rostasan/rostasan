import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
    selector: '[appRecaptcha]'
})
export class ContactDirective implements OnInit {

    private site_key = '6Lc_T5wUAAAAAPc8aYdW3An5PEnEW94YPDMzm-Cg';
    grecaptcha: any;

    constructor(
        private el: ElementRef
    ) { }

    ngOnInit() {
        this.grecaptcha.ready(function () {
            this.grecaptcha.execute('site_key', { action: 'contact' }).then(function (token) {
      });
    });
    }
}
