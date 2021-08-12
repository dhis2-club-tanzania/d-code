import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { QuestionsPageComponent } from './questions-page/questions-page.component';
import { WorkspacePageComponent } from './workspace-page/workspace-page.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTabsModule} from '@angular/material/tabs';
import { HomepageComponent } from './homepage/homepage.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { LoginComponent } from './login/login.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user/user.component';
// import { AngularFireAuth } from '@angular/fire/auth';
import { AuthServiceService } from './services/auth-service.service';
import { FacebookLoginProvider, SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { QuestionsComponent } from './questions-page/questions/questions.component';
// import { AngularFireList } from '@angular/fire/database';
// import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
// import firebase from 'firebase/app';
import { AngularFirestore } from '@angular/fire/firestore';
import { QuestionsService } from './services/questions.service';
import { AuthGuardService } from './guards/auth-guard.service';






@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    QuestionsPageComponent,
    WorkspacePageComponent,
    HomepageComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    QuestionsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDialogModule,
    MatCardModule,
    FlexLayoutModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatDividerModule,
    MatListModule,
    FormsModule, ReactiveFormsModule, MatSidenavModule,
     AngularFireDatabaseModule,
     RouterModule.forRoot([
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
        }
     ]),
   AngularFireModule.initializeApp(environment.firebaseConfig),
   AngularFirestoreModule, // imports firebase/firestore, only needed for database features  , 'yesplease'
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    SocialLoginModule,AngularFirestore
  
  ],
  providers: [AuthServiceService, QuestionsService,
   { provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider(
            '873129566623444'
          )
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '386271275448-ul5gd99vq9fcba1ae4b9smmpa7bj1m35.apps.googleusercontent.com'
          )
        },
        //  {
        //   id: GitHubLoginProvider.PROVIDER_ID,
        //   provider: new GitHubLoginProvider(
        //     'd0125eebf46fe3709b09'
        //   )
        // }
      ]
    } as SocialAuthServiceConfig,
  }    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
