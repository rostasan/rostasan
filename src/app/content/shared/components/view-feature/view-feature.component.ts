import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { AngularFireStorage } from '@angular/fire/storage';

@Component({
  selector: 'app-view-feature',
  templateUrl: './view-feature.component.html',
  styleUrls: ['./view-feature.component.sass']
})
export class ViewFeatureComponent implements OnInit {



  @Input()
  item: any;
  url: any;
  page: 1;
  totalPages: number;
  isLoaded: boolean;
  toggle = true;
  zoom: 1.0;
  originalSize: true;
  autoresize: any;
  currentRoute: any;

  constructor(
    private router: Router,
    private storage: AngularFireStorage,
    private title: Title,
    private meta: Meta
  ) { }

  ngOnInit() {
    this.currentRoute = this.router.url;
    const fileRef = this.storage.ref(this.item.filePath);
    this.url = fileRef.getDownloadURL();


  }

  getRoute(item: any) {
    // dollar-sign curly-bracket is a ES6 string literal. This allows the route to be shared between upper level components
    return [`../${this.currentRoute}`, item.id];
  }

  afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    this.isLoaded = true;
  }
  nextPage() {
    this.page++;
    window.scroll({
      top: 100,
      left: 0,
      behavior: 'smooth'
    });
  }

  prevPage() {
    this.page--;
  }

  togglePDF() {
    this.toggle = !this.toggle;
  }

  incrementZoom(amount: number) {
    this.zoom += amount;
  }
}
