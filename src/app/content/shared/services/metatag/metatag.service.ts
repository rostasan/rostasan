import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MetatagService {



  constructor(

  ) { }


  getTitle(title: any) {
    title = 'Rostasan - Home';
   }
}
