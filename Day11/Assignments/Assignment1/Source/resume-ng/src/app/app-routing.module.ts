import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'education',
    component: EducationComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'skills',
    component: SkillsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
