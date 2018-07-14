import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../user';

@Injectable()
export class FormPoster {
  path = 'http://localhost:3000';
  constructor(private http: Http) {}

  // method parameters includes userdata and also file detail properties
  postForm(details, selectedFileProp) {
    // This includes sending data to 2 end points;
    // 1 - For uploading the form
    // 2 - creating the user in the database (At this end point we are also sending the mail to the user,
    // including file attachment uploaded by the user)
    const formData = new FormData();

    // here I am appending the file, file properties along with file name
    formData.append('image', selectedFileProp, selectedFileProp.name);
    console.log(`upload form name: ${selectedFileProp.name}`);

    // form data includes all the file details for uploading in the local
    this.http.post(this.path + '/upload/' + selectedFileProp.name, formData).subscribe(res => {
      // console.log(res);
    });
    var user = details;
    var form = selectedFileProp;
    //console.log('got data here, posting employee: ', user,);
    this.http.post(`http://localhost:3000/create`, user).subscribe(res => {});
  }
}
