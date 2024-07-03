import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-by-qr-inclinic',
  templateUrl: './view-by-qr-inclinic.component.html',
  styleUrls: ['./view-by-qr-inclinic.component.css']
})
export class ViewByQrInClinicComponent {
  constructor(private router: Router) {}

  handleQrCodeResult(result: string) {
    // Assuming the QR code contains the user ID
    this.router.navigate(['/clinic/viewUser'], { queryParams: { id: result } });
  }
}
