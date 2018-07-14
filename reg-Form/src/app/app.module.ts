import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FormPoster } from './service/form-post.service';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';

const routes = [{ path: 'register', component: FormComponent }];

@NgModule({
  declarations: [AppComponent, FormComponent],
  imports: [BrowserModule, FormsModule, HttpModule, NgbModule.forRoot(), RouterModule.forRoot(routes)],
  providers: [FormPoster],
  bootstrap: [AppComponent],
})
export class AppModule {}
