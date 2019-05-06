import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { MoviesComponent } from './movies.component';
import { MoviesRoutingModule } from './movies.routing.module';

@NgModule({
  declarations: [MoviesComponent],
  imports: [SharedModule, MoviesRoutingModule]
})
export class MoviesModule {}
