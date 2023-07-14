import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdsComponent } from './ads/ads.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './login-form/login-form.component';
import { PromisesComponent } from './promises/promises.component';
import { AngularIntroComponent } from './angular-intro/angular-intro.component';
import { DatatypesComponent } from './datatypes/datatypes.component';
import { DatabindingsComponent } from './databindings/databindings.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';
import { ParentComponent } from './parent/parent.component';
import { CommunicationComponent } from './communication/communication.component';
import { UsersComponent } from './users/users.component';
import { ServicesComponent } from './services/services.component';
import { ChildComponent } from './parent/child/child.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidenavComponent,
    AdsComponent,
    AboutComponent,
    ContactComponent,
    LoginFormComponent,
    PromisesComponent,
    AngularIntroComponent,
    DatatypesComponent,
    DatabindingsComponent,
    DirectivesComponent,
    PipesComponent,
    AngularFormsComponent,
    ParentComponent,
    CommunicationComponent,
    UsersComponent,
    ServicesComponent,
    ChildComponent,
    StudentListComponent,
    StudentDetailsComponent,
    ReactiveFormsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
