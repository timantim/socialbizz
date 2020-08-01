import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './state';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule } from 'apollo-angular';
import { HttpLinkModule } from 'apollo-angular-link-http';
import { AuthGuard } from './shared/guards/auth.guard';
import { LoginGuard } from './shared/guards/login.guard';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './modules/auth/state/auth.effects';
import { ErrorsEffects } from './shared/errors/errors.effects';
import { SnackbarEffects } from './shared/snackbar/snackbar.effects';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    CoreModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot([AuthEffects, ErrorsEffects, SnackbarEffects]),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 100 }) : [],
    GraphQLModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
  ],
  providers: [AuthGuard, LoginGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
