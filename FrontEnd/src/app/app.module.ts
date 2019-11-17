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
import {HttpClientModule} from '@angular/common/http';
import { IssueService} from './issue.service';
=======

>>>>>>> 50a72b6e5ce678c58e215d04090b56f77cf47d86
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
    HttpClientModule,
    RouterModule.forRoot(routes),
    MatToolbarModule
  ],
  providers: [IssueService],
=======
    RouterModule.forRoot(routes),
    MatToolbarModule
  ],
  providers: [],
>>>>>>> 50a72b6e5ce678c58e215d04090b56f77cf47d86
  bootstrap: [AppComponent]
})
export class AppModule { }
