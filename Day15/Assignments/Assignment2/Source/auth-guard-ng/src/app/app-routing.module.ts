import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { AppComponent } from './app.component';
import { AddComponent } from './product/add/add.component';
import { ProductComponent } from './product/product.component';
import { UserGuard } from './user.guard';

const routes: Routes = [
  {
    path: 'product',
    component: ProductComponent,
    canActivate: [UserGuard],
    children: [
      {
        path: 'add',
        canActivate: [AdminGuard],
        component: AddComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
