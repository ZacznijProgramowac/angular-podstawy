import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { InterpolationComponent } from "./interpolation/interpolation.component";
import { PipeComponent } from './pipe/pipe.component';
import { QuestionMarkComponent } from './question-mark/question-mark.component';
import { NgForComponent } from './ng-for/ng-for.component';

@NgModule({
  declarations: [AppComponent, InterpolationComponent, PipeComponent, QuestionMarkComponent, NgForComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
