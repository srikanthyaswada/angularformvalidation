
import { ServicesComponent } from './services/services.component';
import { CommunicationComponent } from './communication/communication.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularIntroComponent } from './angular-intro/angular-intro.component';
import { PromisesComponent } from './promises/promises.component';
import { DatatypesComponent } from './datatypes/datatypes.component';
import { DatabindingsComponent } from './databindings/databindings.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { AngularFormsComponent } from './angular-forms/angular-forms.component';
import { ParentComponent } from './parent/parent.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';


const routes: Routes = [
  { path: '', redirectTo: '/angular-intro', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'loginForm', component: LoginFormComponent },
  { path: 'angular-intro', component: AngularIntroComponent },
  { path: 'promises', component: PromisesComponent },
  { path: 'datatypes', component: DatatypesComponent },
  { path: 'databindings', component: DatabindingsComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'angular-forms', component: AngularFormsComponent },
  { path: 'communication', component: CommunicationComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'reactive-froms', component: ReactiveFormsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
