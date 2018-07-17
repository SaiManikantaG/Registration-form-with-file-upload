import { Component, OnInit } from '@angular/core';
import { UserlistService } from '../service/userlist.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
})
export class UserListComponent implements OnInit {
  usrListData: any = [];
  res = [];

  constructor(private userlistservice: UserlistService) {}
  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails() {
    this.userlistservice.getProductInitial().subscribe(data => {
      console.log(data);
      this.res = data;
      if (data) {
        this.usrListData = this.res;
      }
    });
  }
}
