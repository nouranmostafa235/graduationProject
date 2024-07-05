import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgxScannerQrcodeComponent, ScannerQRCodeResult } from 'ngx-scanner-qrcode';
@Component({
  selector: 'app-choose-view-option-clinic',
  templateUrl: './choose-view-option-clinic.component.html',
  styleUrls: ['./choose-view-option-clinic.component.css']
})
export class ChooseViewOptionClinicComponent {
  
  // async writeToNfc(): Promise<void> {
  //   if ('NDEFReader' in window) {
  //     try {
  //       const ndef = new (window as any).NDEFReader();
  //       await ndef.scan();
  //       console.log("Scan started successfully.");

  //       await ndef.write({
  //         records: [{ recordType: "text", data: this.data._id }]
  //       });
  //       console.log("Data written to NFC tag successfully.");
  //     } catch (error) {
  //       console.error("Error writing to NFC tag:", error);
  //     }
  //   } else {
  //     console.error("Web NFC is not available in this browser.");
  //   }
  // }
}
// <button (click)="writeToNfc()">Write User ID to NFC</button>


