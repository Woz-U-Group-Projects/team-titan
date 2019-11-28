import { BrowserModule } from '../../node_modules/@angular/platform-browser';
import { NgModule } from '../../node_modules/@angular/core';
import {RouterModule, Routes} from '../../node_modules/@angular/router';
import { MatToolbarModule} from '../../node_modules/@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '../../node_modules/@angular/platform-browser/animations';
import { ListComponent } from './component/list/list.component';
import { CreateComponent } from './component/create/create.component';
import { EditComponent } from './component/edit/edit.component';

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
    RouterModule.forRoot(routes),
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
