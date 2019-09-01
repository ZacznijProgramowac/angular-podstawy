import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { InterpolationComponent } from "./interpolation/interpolation.component";
import { PipeComponent } from './pipe/pipe.component';
import { QuestionMarkComponent } from './question-mark/question-mark.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { NgModelComponent } from './ng-model/ng-model.component';
import { FormsModule } from '@angular/forms';
import { NgifSwitchComponent } from './ngif-switch/ngif-switch.component';

@NgModule({
  declarations: [AppComponent, InterpolationComponent, PipeComponent, QuestionMarkComponent, NgForComponent, EventBindingComponent, PropertyBindingComponent, NgModelComponent, NgifSwitchComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
