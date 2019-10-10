import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MetatagService implements OnInit {



  constructor(

  ) { }

  ngOnInit() {

  }
  getTitle(title: any) {
    title = 'Rostasan - Home';
   }
}
