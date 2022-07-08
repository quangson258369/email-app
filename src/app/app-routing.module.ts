import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailDetailComponent } from './email-detail/email-detail.component';
import { EmailPreviewComponent } from './email-preview/email-preview.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes =
  [
    { path: '', redirectTo: '/messages', pathMatch: 'full' },
    {
      path: 'messages', component: MessagesComponent,
      children:
      [{
        path:":box",component:EmailPreviewComponent,children:[{path:":id",component:EmailDetailComponent}]
      }]
    },
   
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
