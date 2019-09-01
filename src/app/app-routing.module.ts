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

const routes: Routes = [
  {
    path: '',
    redirectTo: 'interpolation',
    pathMatch: 'full'
  },
  {
    path: 'interpolation',
    component: InterpolationComponent
  },
  {
    path: 'pipe',
    component: PipeComponent
  },
  {
    path: 'question-mark',
    component: QuestionMarkComponent
  },
  {
    path: 'ng-for',
    component: NgForComponent
  },
  {
    path: 'event-binding',
    component: EventBindingComponent
  },
  {
    path: 'property-binding',
    component: PropertyBindingComponent
  },
  {
    path: 'ng-model',
    component: NgModelComponent
  },
  {
    path: 'ng-if',
    component: NgifSwitchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
