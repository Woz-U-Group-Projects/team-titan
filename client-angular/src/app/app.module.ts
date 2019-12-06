import { BrowserModule } from "../../node_modules/@angular/platform-browser";
import { NgModule } from "../../node_modules/@angular/core";
import { FormsModule } from "../../node_modules/@angular/forms";
import { HttpClientModule } from "../../node_modules/@angular/common/http";
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
