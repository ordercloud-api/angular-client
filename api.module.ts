import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from './configuration';

import { AddressService } from './api/address.service';
import { AdminAddressService } from './api/adminAddress.service';
import { AdminUserService } from './api/adminUser.service';
import { AdminUserGroupService } from './api/adminUserGroup.service';
import { ApprovalRuleService } from './api/approvalRule.service';
import { BuyerService } from './api/buyer.service';
import { CatalogService } from './api/catalog.service';
import { CategoryService } from './api/category.service';
import { CostCenterService } from './api/costCenter.service';
import { CreditCardService } from './api/creditCard.service';
import { ImpersonationConfigService } from './api/impersonationConfig.service';
import { LineItemService } from './api/lineItem.service';
import { MeService } from './api/me.service';
import { MessageSendersService } from './api/messageSenders.service';
import { OrderService } from './api/order.service';
import { PasswordResetService } from './api/passwordReset.service';
import { PaymentService } from './api/payment.service';
import { PriceScheduleService } from './api/priceSchedule.service';
import { ProductService } from './api/product.service';
import { PromotionService } from './api/promotion.service';
import { SecurityProfileService } from './api/securityProfile.service';
import { ShipmentService } from './api/shipment.service';
import { SpecService } from './api/spec.service';
import { SpendingAccountService } from './api/spendingAccount.service';
import { SupplierService } from './api/supplier.service';
import { SupplierUserService } from './api/supplierUser.service';
import { SupplierUserGroupService } from './api/supplierUserGroup.service';
import { UserService } from './api/user.service';
import { UserGroupService } from './api/userGroup.service';
import { AuthService } from './api/auth.service';
import { TokenService } from './api/token.service';

@NgModule({
  imports:      [ CommonModule, HttpClientModule ],
  declarations: [],
  exports:      [],
  providers: [
    AddressService,
    AdminAddressService,
    AdminUserService,
    AdminUserGroupService,
    ApprovalRuleService,
    BuyerService,
    CatalogService,
    CategoryService,
    CostCenterService,
    CreditCardService,
    ImpersonationConfigService,
    LineItemService,
    MeService,
    MessageSendersService,
    OrderService,
    PasswordResetService,
    PaymentService,
    PriceScheduleService,
    ProductService,
    PromotionService,
    SecurityProfileService,
    ShipmentService,
    SpecService,
    SpendingAccountService,
    SupplierService,
    SupplierUserService,
    SupplierUserGroupService,
    UserService,
    UserGroupService,
    AuthService,
    TokenService
     ]
})
export class OrderCloudModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: OrderCloudModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        }
    }

    constructor( @Optional() @SkipSelf() parentModule: OrderCloudModule) {
        if (parentModule) {
            throw new Error('OrderCloudModule is already loaded. Import your base AppModule only.');
        }
    }
}
