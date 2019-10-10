import { PipeTransform, Pipe } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

@Pipe({ name: 'downloadUrl' })
export class DownloadUrlPipe implements PipeTransform {
  constructor(public storage: AngularFireStorage) {}

  transform(path: any): any {
    const pdf = this.storage.ref(path).getDownloadURL();
    return pdf;
  }
}
