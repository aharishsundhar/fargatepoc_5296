import { AuthGuard } from './auth/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SefscreenComponent } from './sefscreen/sefscreen.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { UpdateauthorizationComponent } from './authorization/updateauthorization/updateauthorization.component';
import { ManagerolesComponent } from './manageroles/manageroles.component';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { ManagecontrolComponent } from './managecontrol/managecontrol.component';
import { UserComponent } from './user/user.component';
import { ProfilesettingsComponent } from './user/profilesettings/profilesettings.component';
import { VaultadminComponent } from './vaultadmin/vaultadmin.component';
import { TemplateComponent } from './template/template.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
{ path: 'sefscreen', component: SefscreenComponent, canActivate: [AuthGuard] },
{ path: 'signup', component: SignupComponent },
{ path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
{ path: 'authorization', component: AuthorizationComponent, canActivate: [AuthGuard] },
{ path: 'updateauthorization', component: UpdateauthorizationComponent, canActivate: [AuthGuard] },
{ path: 'manageroles', component: ManagerolesComponent, canActivate: [AuthGuard] },
{ path: 'manageusers', component: ManageusersComponent, canActivate: [AuthGuard] },
{ path: 'managecontrol', component: ManagecontrolComponent, canActivate: [AuthGuard] },
{ path: 'usermanagement', component: UserComponent, canActivate: [AuthGuard] },
{ path: 'profile', component: ProfilesettingsComponent, canActivate: [AuthGuard] },
{ path: 'vaultadmin', component: VaultadminComponent, canActivate: [AuthGuard] },
       { path: '', component: TemplateComponent, pathMatch: 'full'   } ,
{ path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },

{ path : 'label1', loadChildren: () => import('./label1/label1.module').then(m => m.Label1Module), canActivate: [AuthGuard] } , 
{ path : 'test2', loadChildren: () => import('./test2/test2.module').then(m => m.Test2Module), canActivate: [AuthGuard] } , 
{ path : 'test3', loadChildren: () => import('./test3/test3.module').then(m => m.Test3Module), canActivate: [AuthGuard] } , 
{ path : 'test4', loadChildren: () => import('./test4/test4.module').then(m => m.Test4Module), canActivate: [AuthGuard] } , 
{ path : 'createtags', loadChildren: () => import('./createtags/createtags.module').then(m => m.CreatetagsModule), canActivate: [AuthGuard] } , 
{ path : 'updatetags', loadChildren: () => import('./updatetags/updatetags.module').then(m => m.UpdatetagsModule), canActivate: [AuthGuard] } , 
{ path : 'test6', loadChildren: () => import('./test6/test6.module').then(m => m.Test6Module), canActivate: [AuthGuard] } , 
{ path : 'test7', loadChildren: () => import('./test7/test7.module').then(m => m.Test7Module), canActivate: [AuthGuard] } , 
{ path : 'test8', loadChildren: () => import('./test8/test8.module').then(m => m.Test8Module), canActivate: [AuthGuard] } , 
{ path : 'test9', loadChildren: () => import('./test9/test9.module').then(m => m.Test9Module), canActivate: [AuthGuard] } , 
{ path : 'test11', loadChildren: () => import('./test11/test11.module').then(m => m.Test11Module), canActivate: [AuthGuard] } , 
{ path : 'test10', loadChildren: () => import('./test10/test10.module').then(m => m.Test10Module), canActivate: [AuthGuard] } , 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
