import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxScannerQrcodeComponent, ScannerQRCodeResult } from 'ngx-scanner-qrcode';
@Component({
  selector: 'app-choose-view-option-clinic',
  templateUrl: './choose-view-option-clinic.component.html',
  styleUrls: ['./choose-view-option-clinic.component.css']
})
export class ChooseViewOptionClinicComponent {
  nfcError: string | null = null;

  constructor(private router: Router) {}

  async startNfcScan() {
    if ('NFCReader' in window) {
      try {
        const ndef = new (window as any).NDEFReader();
        await ndef.scan();

        ndef.onreading = (event: any) => {
          const message = event.message;
          for (const record of message.records) {
            if (record.recordType === "text") {
              const textDecoder = new TextDecoder(record.encoding);
              const userId = textDecoder.decode(record.data);
              console.log('NFC tag read:', userId);
              this.router.navigate(['/clinic/viewUser'], { queryParams: { id: userId } });
            }
          }
        };

        ndef.onreadingerror = (event: any) => {
          console.error('NFC reading error:', event);
          this.nfcError = 'Error reading NFC tag. Please try again.';
        };
      } catch (error) {
        console.error('NFC scanning error:', error);
        this.nfcError = 'NFC scanning failed. Please ensure NFC is enabled and try again.';
      }
    } else {
      this.nfcError = 'Web NFC is not supported by this browser.';
    }
  }
}

