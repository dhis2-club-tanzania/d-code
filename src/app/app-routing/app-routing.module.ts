import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../homepage/homepage.component';
import { QuestionsPageComponent } from '../questions-page/questions-page.component';
import { WorkspacePageComponent } from '../workspace-page/workspace-page.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { UserComponent } from '../user/user.component';
import { AuthGuardService} from '../guards/auth-guard.service';
import { QuestionsComponent } from '../questions-page/questions/questions.component';


   const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'User', component: UserComponent, canActivate: [AuthGuardService]},
   { path: 'homepage-component',
   component: HomepageComponent
   },
   { path: 'questions-page-component',
    component: QuestionsPageComponent
    },
    { path: 'workspace-page-component',
      component: WorkspacePageComponent
      },
      { path: 'login-component',
        component:  LoginComponent
     },
     { path: 'register-component',
     component:  RegisterComponent
    },
     { path: 'user-component',
  component:  UserComponent
    },
    { path: 'questions',
    component:  QuestionsComponent
      }
   ];

  //  export const rootRouterConfig: Routes = [
  
  // ];

@NgModule({
  // declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes), 
  ],
  exports: [
  RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
