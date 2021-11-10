import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { QuestionsPageComponent } from './questions-page/questions-page.component';
import { WorkspacePageComponent } from './workspace-page/workspace-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
import { AuthGuardService} from './guards/auth-guard.service';
import { QuestionsComponent } from './questions-page/questions/questions.component';
import { AuthHomepageComponent } from './auth-homepage/auth-homepage.component';
import { YourSolutionsComponent } from './workspace-page/your-solutions/your-solutions.component';
import { SubmittedcodesComponent } from './submittedcodes/submittedcodes.component';

   const routes: Routes = [
    { path: '', redirectTo: '/homepage', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent},
    { path: 'user-profile', component: UserComponent,
     canActivate: [AuthGuardService]
    },
   { path: 'homepage',
   component: HomepageComponent
   },
   { path: 'questions-page',
    component: QuestionsPageComponent, canActivate: [AuthGuardService]
    },
    { path: 'workspace-page',
      component: WorkspacePageComponent, canActivate: [AuthGuardService]
      },
    { path: '',
     component: QuestionsComponent 
    },
    { path: 'questions/:id',
     component: WorkspacePageComponent 
    },
    { path: 'questions',
    component:  QuestionsComponent
      },
    { path: 'auth-homepage',
      component:  AuthHomepageComponent
     },
     { path: 'ys',
      component:  YourSolutionsComponent
     },
     { path: 'codes',
     component:  SubmittedcodesComponent
    }
   ];



@NgModule({

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

