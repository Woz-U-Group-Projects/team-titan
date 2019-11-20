import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { MatToolbarModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListComponent } from './component/list/list.component';
import { CreateComponent } from './component/create/create.component';
import { EditComponent } from './component/edit/edit.component';
<<<<<<< HEAD

=======
import {HttpClientModule} from '@angular/common/http';
import { IssueService} from './issue.service';
>>>>>>> 3cea2f9849c7e2f480d2988d8aaebc57945948d9
const routes: Routes = [
{path: 'create', component: CreateComponent},
{path: 'edit/:id', component: EditComponent},
{path: 'list', component: ListComponent},
{path: '', redirectTo: 'list', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    RouterModule.forRoot(routes),
    MatToolbarModule
  ],
  providers: [],
=======
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatToolbarModule
  ],
  providers: [IssueService],
>>>>>>> 3cea2f9849c7e2f480d2988d8aaebc57945948d9
  bootstrap: [AppComponent]
})
export class AppModule { }
