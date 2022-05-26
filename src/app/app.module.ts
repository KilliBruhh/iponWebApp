import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { AppRoutingModule } from './app-routing.module';
import { CombosViewComponent } from './combos-view/combos-view.component';
import { CombosCreateComponent } from './combos-create/combos-create.component';
import { HttpClientModule } from '@angular/common/http';
import { ComboDetailsComponent } from './combo-details/combo-details.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    HomeComponentComponent,
    FooterComponentComponent,
    CombosViewComponent,
    CombosCreateComponent,
    ComboDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
