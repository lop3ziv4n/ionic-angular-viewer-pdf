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
    let filePath = this.file.applicationDirectory + 'www/assets';
    if (this.platform.is('android')) {
      let fakeName = Date.now();
      this.file.copyFile(filePath, 'file-sample_150kB.pdf', this.file.dataDirectory, `${fakeName}.pdf`)
        .then(result => {
          this.fileOpener.open(result.nativeURL, 'application/pdf')
          .then(() => console.log('File is opened'))
          .catch(e => console.log('Error opening file', e));
        });
    } else {
      // Use Document viewer for iOS for a better UI
      const options: DocumentViewerOptions = {
        title: 'My PDF'
      }
      this.documentViewer.viewDocument(`${filePath}/file-sample_150kB.pdf`, 'application/pdf', options);
    }
  }

  downloadPDF() {
    let downloadUrl = 'https://file-examples.com/wp-content/uploads/2017/10/file-example_PDF_1MB.pdf';
    let path = this.file.dataDirectory;
    let fakeName = Date.now();
    const transfer = this.fileTransfer.create();
    transfer.download(downloadUrl, path + `${fakeName}.pdf`)
      .then(entry => {
        let url = entry.toURL();
        if (this.platform.is('ios')) {
          this.documentViewer.viewDocument(url, 'application/pdf', {});
        } else {
          this.fileOpener.open(url, 'application/pdf')
            .then(() => console.log('File is opened'))
            .catch(e => console.log('Error opening file', e));
        }
      });
  }

}
