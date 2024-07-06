import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { response } from 'express';
import { InstitutionsService } from 'src/app/institutions.service';

@Component({
  selector: 'app-clinic-nav-bar',
  templateUrl: './clinic-nav-bar.component.html',
  styleUrls: ['./clinic-nav-bar.component.css']
})
export class ClinicNavBarComponent implements OnInit {
  constructor(private service: InstitutionsService, private route: Router) {
  }
  clinicInfo: any
  ngOnInit(): void {
    this.service.getClinicByToken().subscribe({
      next: (response) => {
        this.clinicInfo = response.clinic
      }
    })
  }
  logOut() {
    this.service.logOutClinic().subscribe({
      next: (response) => {
        localStorage.removeItem("clinicTokin")
        this.route.navigate(['/institutionLogin'])
      }
    })


  }
}
