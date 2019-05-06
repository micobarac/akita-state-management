import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products.routing.module';

const publicApi = [ProductsComponent, ProductComponent];

@NgModule({
  imports: [SharedModule, ProductsRoutingModule],
  declarations: [publicApi],
  exports: [publicApi]
})
export class ProductsModule {}
