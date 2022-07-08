import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailBoxComponent } from './email-box/email-box.component';
import { EmailPreviewComponent } from './email-preview/email-preview.component';
import { EmailDetailComponent } from './email-detail/email-detail.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    EmailBoxComponent,
    EmailPreviewComponent,
    EmailDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
