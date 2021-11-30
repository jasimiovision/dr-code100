import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SampleListComponent } from './sample/sample-list/sample-list.component';
import { SampleCreateComponent } from './sample/sample-create/sample-create.component';
import { EditPageComponent } from './pages/edit/edit-page/edit-page.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { LandingPageComponent } from './pages/landing/landing-page/landing-page.component';
import { ReportPageComponent } from './pages/report/report-page/report-page.component';
import { ReportConfigurationPageComponent } from './pages/report-configuration-page/report-configuration-page.component';
import { TemplatePageComponent } from './pages/template/template-page/template-page.component';
import { VisualizationPageComponent } from './pages/visualization/visualization-page/visualization-page.component';
import { SampleImageComponent } from './sample/sample-image/sample-image.component';
import { UploadPageComponent } from './pages/upload/upload-page/upload-page.component';
import { AdminPageComponent } from './pages/admin/admin-page/admin-page.component';
import { LoadingPageComponent } from './pages/loading-page/loading-page.component';

import { AuthGuard } from './general-services/guards/auth.guard';
import { AdminGuard } from './general-services/guards/admin.guard';
import { NoClientGuard } from './general-services/guards/no-client.guard';
import { PermissionGuard } from './general-services/guards/permission.guard';

// BUG: WHEN RELOADING ON PAGE WITH PERMISSION GUARD, IT WILL AUTO RELOAD BACK TO THE HOME PAGE
const routes: Routes = [
  { path: "" , component: LandingPageComponent },
  { path: "home" , component: HomePageComponent, canActivate: [AuthGuard] },
  { path: "edit/:id", component: EditPageComponent, canActivate: [AuthGuard, NoClientGuard, PermissionGuard] },
  { path: "edit/:id/:keyid", component: EditPageComponent, canActivate: [AuthGuard, NoClientGuard, PermissionGuard] },
  { path: "visualization/:id", component: VisualizationPageComponent, canActivate: [AuthGuard, PermissionGuard] },
  { path: "report/:id", component: ReportPageComponent, canActivate: [AuthGuard, NoClientGuard, PermissionGuard] },
  { path: "report-config/:id", component: ReportConfigurationPageComponent, canActivate: [AuthGuard, PermissionGuard] },
  { path: "template/:id", component: TemplatePageComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: "sample", component: SampleListComponent, canActivate: [AuthGuard] },
  { path: "sample/create", component: SampleCreateComponent, canActivate: [AuthGuard] },
  { path: "sample/edit/:id", component: SampleCreateComponent, canActivate: [AuthGuard] },
  { path: "sample/image", component: SampleImageComponent, canActivate: [AuthGuard] },
  { path: "upload", component: UploadPageComponent, canActivate: [AuthGuard, NoClientGuard]},
  // { path: "setting/:id", component: UploadPageComponent, canActivate: [AuthGuard, NoClientGuard, PermissionGuard]},
  { path: "admin", component: AdminPageComponent, canActivate: [AuthGuard, AdminGuard]},
  { path: "loading/:id", component: LoadingPageComponent, canActivate: [AuthGuard, PermissionGuard]},
  // Redirect unknown routes to "/"
  { path: "**", redirectTo: "home", pathMatch: "full"}
  // // Playground Paths
  // { path: "sample", component: SampleListComponent, canActivate: [AuthGuard] },
  // { path: "sample/create", component: SampleCreateComponent, canActivate: [AuthGuard] },
  // { path: "sample/edit/:id", component: SampleCreateComponent, canActivate: [AuthGuard] },
  // { path: "sample/image", component: SampleImageComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, AdminGuard, NoClientGuard, PermissionGuard]
})
export class AppRoutingModule { }
