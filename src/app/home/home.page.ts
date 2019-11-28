import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private platform: Platform, private file: File,
    private fileTransfer: FileTransfer, private fileOpener: FileOpener,
    private documentViewer: DocumentViewer) { }

  openPDF() {
    const options: DocumentViewerOptions = {
      title: 'My PDF'
    };
    this.documentViewer.viewDocument('assets/file-sample_150kB.pdf', 'application/pdf', options);
  }

  downloadPDF() {
    let downloadURL = 'https://file-examples.com/wp-content/uploads/2017/10/file-example_PDF_1MB.pdf';
    let path = null;

    if (this.platform.is('ios')) {
      path = this.file.documentsDirectory;
    } else {
      path = this.file.dataDirectory;
    }

    const transfer = this.fileTransfer.create();
    transfer.download(downloadURL, `${path}myFile.pdf`).then(entry => {
      let url = entry.toURL();
      this.documentViewer.viewDocument(url, 'application/pdf', {});
    });
  }

}
