import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InstitutionsService } from 'src/app/institutions.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-by-search-inclinic',
  templateUrl: './view-by-search-inclinic.component.html',
  styleUrls: ['./view-by-search-inclinic.component.css']
})
export class ViewBySearchINClinicComponent implements OnInit {
  allusers: any;
  searchVal = '';
  selectedUserId: string = '';
  clinicId: string = '';

  constructor(private service: InstitutionsService, private route: Router) { }

  ngOnInit(): void {
    this.service.getallUsers().subscribe({
      next: (response) => {
        this.allusers = response;
      },
      error: (err) => {
        console.error('Error fetching users', err);
        Swal.fire('Error', 'Failed to fetch users.', 'error');
      }
    });

    this.service.getClinicByToken().subscribe({
      next: (response) => {
        this.clinicId = response.clinic._id;
      },
      error: (err) => {
        console.error('Error fetching clinic info', err);
        Swal.fire('Error', 'Failed to fetch clinic information.', 'error');
      }
    });
  }

  setSelectedUser(userId: string) {
    if (userId) {
      this.selectedUserId = userId;
      this.route.navigate(['/clinic/viewUser'], { queryParams: { id: userId } });
    } else {
      Swal.fire('Warning', 'Please select a user.', 'warning');
    }
  }
}
