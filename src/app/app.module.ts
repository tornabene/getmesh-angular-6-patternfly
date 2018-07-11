import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';
import { TabsModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap';



// NGX Bootstrap
import { BsDropdownConfig, BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipConfig, TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { MeshDataService } from './mesh-data.service';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductEditorComponent } from './product-editor/product-editor.component';
import { ProductListComponent } from './product-list/product-list.component';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';



@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductEditorComponent,
    ProductListComponent,
    WelcomeScreenComponent
  ],
  imports: [
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    CarouselModule.forRoot(), 
    BsDropdownModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [
    BsDropdownConfig,
    MeshDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
