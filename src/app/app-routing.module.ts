import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProgressComponent } from './progress/progress.component';

import { CombosViewComponent } from './combos-view/combos-view.component';
import { CombosDetailsComponent } from './combos-details/combos-details.component';
import { CombosCreateComponent } from './combos-create/combos-create.component';
import { ComboPersonelComponent } from './combo-personel/combo-personel.component';

import { PageNavigationComponent } from './page-navigation/page-navigation.component';

const routes: Routes = [
  { path: 'footer', component: FooterComponentComponent},
  { path: 'header', component: HeaderComponentComponent},
  { path: 'Home', component: HomeComponentComponent},
  { path: 'progress', component: ProgressComponent},
  { path: 'combosView', component: CombosViewComponent},
  { path: 'combosDetails', component: CombosDetailsComponent},
  { path: 'combosCreate', component: CombosCreateComponent},
  { path: 'pageNavigation', component: PageNavigationComponent},
  { path: 'combosPersonel', component: ComboPersonelComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }