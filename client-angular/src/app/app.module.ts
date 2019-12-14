<<<<<<< HEAD
import { BrowserModule } from "../../node_modules/@angular/platform-browser";
import { NgModule } from "../../node_modules/@angular/core";
import { FormsModule } from "../../node_modules/@angular/forms";
import { HttpClientModule } from "../../node_modules/@angular/common/http";
=======
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
>>>>>>> 408e9537b5b8ab21c3132c8d9a5924dde28cd7c5
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TaskDisplayComponent } from "./task-display/task-display.component";

@NgModule({
  declarations: [AppComponent, TaskDisplayComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
