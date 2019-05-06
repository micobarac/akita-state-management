import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart.routing.module';

const publicApi = [CartComponent];

@NgModule({
  imports: [SharedModule, CartRoutingModule],
  declarations: [publicApi],
  exports: [publicApi]
})
export class CartModule {}
