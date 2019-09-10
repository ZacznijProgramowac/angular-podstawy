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
import { InterpolationExerciseComponent } from './interpolation/interpolation-exercise/interpolation-exercise.component';
import { PipeExerciseComponent } from './pipe/pipe-exercise/pipe-exercise.component';
import { QuestionMarExerciseComponent } from './question-mark/question-mar-exercise/question-mar-exercise.component';
import { NgForExerciseComponent } from './ng-for/ng-for-exercise/ng-for-exercise.component';
import { EventBindingExerciseComponent } from './event-binding/event-binding-exercise/event-binding-exercise.component';
import { PropertyBindingExerciseComponent } from './property-binding/property-binding-exercise/property-binding-exercise.component';
import { NgModelExerciseComponent } from './ng-model/ng-model-exercise/ng-model-exercise.component';
import { NgifSwitchExerciseComponent } from './ngif-switch/ngif-switch-exercise/ngif-switch-exercise.component';

@NgModule({
  declarations: [AppComponent, InterpolationComponent, PipeComponent, QuestionMarkComponent, NgForComponent, EventBindingComponent, PropertyBindingComponent, NgModelComponent, NgifSwitchComponent, InterpolationExerciseComponent, PipeExerciseComponent, QuestionMarExerciseComponent, NgForExerciseComponent, EventBindingExerciseComponent, PropertyBindingExerciseComponent, NgModelExerciseComponent, NgifSwitchExerciseComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
