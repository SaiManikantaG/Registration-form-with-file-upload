import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormPoster } from '../service/form-post.service';
import { NgForm } from '../../../node_modules/@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  selectedFileProp = null;
  ngOnInit() {}
  userModel = new User(' ', ' ', ' ', ' ', ' ', ' ', true, ' ');
  constructor(private formpost: FormPoster) {}

  onFileSelected(event) {
    this.selectedFileProp = <File>event.target.files[0];
    console.log(event);
  }
  submit(form: NgForm) {
    //console.log(`file name is: ${this.selectedFileProp.name}`);
    // This is file name, we need this to get the uploaded file in the local directory while sending the mail to user
    // **** This is Important ****
    this.userModel['FileName'] = this.selectedFileProp.name;
    // method parameters includes userdata and also file detail properties
    this.formpost.postForm(this.userModel, this.selectedFileProp);
    alert(` Successfully Saved The Form`);
    window.location.reload();
  }
}
