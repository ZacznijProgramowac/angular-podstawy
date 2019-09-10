import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PipeComponent } from './pipe/pipe.component';
import { QuestionMarkComponent } from './question-mark/question-mark.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { NgModelComponent } from './ng-model/ng-model.component';
import { NgifSwitchComponent } from './ngif-switch/ngif-switch.component';
import { InterpolationExerciseComponent } from './interpolation/interpolation-exercise/interpolation-exercise.component';
import { PipeExerciseComponent } from './pipe/pipe-exercise/pipe-exercise.component';
import { QuestionMarExerciseComponent } from './question-mark/question-mar-exercise/question-mar-exercise.component';
import { NgForExerciseComponent } from './ng-for/ng-for-exercise/ng-for-exercise.component';
import { EventBindingExerciseComponent } from './event-binding/event-binding-exercise/event-binding-exercise.component';
import { PropertyBindingExerciseComponent } from './property-binding/property-binding-exercise/property-binding-exercise.component';
import { NgModelExerciseComponent } from './ng-model/ng-model-exercise/ng-model-exercise.component';
import { NgifSwitchExerciseComponent } from './ngif-switch/ngif-switch-exercise/ngif-switch-exercise.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'interpolation',
    pathMatch: 'full'
  },
  {
    path: 'interpolation',
    component: InterpolationComponent,
  },
  {
    path: 'interpolation/exercise',
    component: InterpolationExerciseComponent
  },
  {
    path: 'pipe',
    component: PipeComponent,
  },
  {
    path: 'pipe/exercise',
    component: PipeExerciseComponent,
  },
  {
    path: 'question-mark',
    component: QuestionMarkComponent,
  },
  {
    path: 'question-mark/exercise',
    component: QuestionMarExerciseComponent,
  },
  {
    path: 'ng-for',
    component: NgForComponent,
  },
  {
    path: 'ng-for/exercise',
    component: NgForExerciseComponent,
  },
  {
    path: 'event-binding',
    component: EventBindingComponent,
  },
  {
    path: 'event-binding/exercise',
    component: EventBindingExerciseComponent,
  },
  {
    path: 'property-binding',
    component: PropertyBindingComponent,
  },
  {
    path: 'property-binding/exercise',
    component: PropertyBindingExerciseComponent,
  },
  {
    path: 'ng-model',
    component: NgModelComponent,
  },
  {
    path: 'ng-model/exercise',
    component: NgModelExerciseComponent,
  },
  {
    path: 'ng-if',
    component: NgifSwitchComponent,
  },
  {
    path: 'ng-if/exercise',
    component: NgifSwitchExerciseComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
