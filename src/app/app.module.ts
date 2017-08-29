import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule} from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule, MdCardModule, MdButtonModule, MdDialogModule, MdListModule, MdIconModule, MdChipsModule, MdTabsModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { ShareDataServiceService } from './share-data-service.service';
import { DataResolverService } from './data-resolver.service';
import 'hammerjs';

import { AppComponent, UserInfoDialog } from './app.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { ContentComponent } from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoDialog,
    HomeComponent,
    PostComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdCardModule,
    MdButtonModule,
    MdListModule,
    MdIconModule,
    MdChipsModule,
    HttpModule,
    MdDialogModule,
    MdTabsModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'content',
        component: ContentComponent
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: '/home'
      }
    ])
  ],
  providers: [ShareDataServiceService, DataResolverService],
  bootstrap: [AppComponent, UserInfoDialog]
})
export class AppModule { }
