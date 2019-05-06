import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { RouterModule, Routes } from '@angular/router';
import { ContentLoaderModule } from '@netbasal/ngx-content-loader';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: ContactsComponent
  }
];

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, ContentLoaderModule, RouterModule.forChild(routes)],
  declarations: [ContactsComponent]
})
export class ContactsModule {}
