import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CombosViewComponent } from './combos-view/combos-view.component';
import { CombosCreateComponent } from './combos-create/combos-create.component';
import { ComboDetailsComponent } from './combo-details/combo-details.component';
import { StoreComponent } from './store/store.component';

const routes: Routes = [
  { path: 'footer', component: FooterComponentComponent},
  { path: 'header', component: HeaderComponentComponent},
  { path: 'Home', component: HomeComponentComponent},
  { path: 'combosView', component: CombosViewComponent},
  { path: 'combosCreate', component: CombosCreateComponent},
  { path: 'combosDetails/:id', component: ComboDetailsComponent},
  { path: 'store', component: StoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }