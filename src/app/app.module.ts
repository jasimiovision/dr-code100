import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularResizedEventModule } from 'angular-resize-event';

/** Components from @angular/material */
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';

/** Custome made components */
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { SampleCreateComponent } from './sample/sample-create/sample-create.component';
import { SampleListComponent } from './sample/sample-list/sample-list.component';
import { EditPageComponent } from './pages/edit/edit-page/edit-page.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { LandingPageComponent } from './pages/landing/landing-page/landing-page.component';
import { LoginComponent } from './pages/landing/login/login.component';
import { ReportPageComponent } from './pages/report/report-page/report-page.component';
import { VisualizationPageComponent } from './pages/visualization/visualization-page/visualization-page.component';
import { FloorPlanComponent } from './pages/visualization/floor-plan/floor-plan.component';
import { ImageUploadComponent } from './sample/image-upload/image-upload.component';
import { ImageViewComponent } from './sample/image-view/image-view.component';
import { SampleImageComponent } from './sample/sample-image/sample-image.component';
import { SidenavComponent } from './sidenav/sidenav/sidenav.component';
import { AdminPageComponent } from './pages/admin/admin-page/admin-page.component';
import { LoadingPageComponent } from './pages/loading-page/loading-page.component';
import { ObjectPipe } from "./general-services/object.pipe"

/** Components from External Library */
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { UploadPageComponent } from './pages/upload/upload-page/upload-page.component';

/** HTTP Interceptors **/
import { AuthInterceptor } from './general-services/auth-interceptor';
import { ReportConfigurationPageComponent } from './pages/report-configuration-page/report-configuration-page.component';
import { TemplatePageComponent } from './pages/template/template-page/template-page.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FooterComponent,
    SampleCreateComponent,
    SampleListComponent,
    EditPageComponent,
    HomePageComponent,
    LandingPageComponent,
    LoginComponent,
    ReportPageComponent,
    VisualizationPageComponent,
    FloorPlanComponent,
    SidenavComponent,
    ImageUploadComponent,
    ImageViewComponent,
    SampleImageComponent,
    UploadPageComponent,
    AdminPageComponent,
    ObjectPipe,
    LoadingPageComponent,
    ReportConfigurationPageComponent,
    TemplatePageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularResizedEventModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatMenuModule,
    DragDropModule,
    CKEditorModule,
    MatExpansionModule,
    MatSelectModule,
    MatStepperModule,
    MatTooltipModule,
    MatTabsModule
  ],
  // to leverage Angular Elements API to render into a static element
  // read more at: https://egghead.io/lessons/angular-transform-an-angular-component-into-a-native-custom-element
  // entryComponents: [FloorPlanComponent], 
  // schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { 
  // constructor(injector:Injector){
  //   const el = createCustomElement(FloorPlanComponent, {injector: injector})
  //   customElements.define('app-floor-plan', el)

  // }
}
