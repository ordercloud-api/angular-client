import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from './configuration';

import { OcAddressService } from './api/address.service';
import { OcAdminAddressService } from './api/adminAddress.service';
import { OcAdminUserService } from './api/adminUser.service';
import { OcAdminUserGroupService } from './api/adminUserGroup.service';
import { OcApprovalRuleService } from './api/approvalRule.service';
import { OcBuyerService } from './api/buyer.service';
import { OcCatalogService } from './api/catalog.service';
import { OcCategoryService } from './api/category.service';
import { OcCostCenterService } from './api/costCenter.service';
import { OcCreditCardService } from './api/creditCard.service';
import { OcImpersonationConfigService } from './api/impersonationConfig.service';
import { OcIncrementorService } from './api/incrementor.service';
import { OcLineItemService } from './api/lineItem.service';
import { OcMeService } from './api/me.service';
import { OcMessageSenderService } from './api/messageSender.service';
import { OcOrderService } from './api/order.service';
import { OcPasswordResetService } from './api/passwordReset.service';
import { OcPaymentService } from './api/payment.service';
import { OcPriceScheduleService } from './api/priceSchedule.service';
import { OcProductService } from './api/product.service';
import { OcPromotionService } from './api/promotion.service';
import { OcSecurityProfileService } from './api/securityProfile.service';
import { OcShipmentService } from './api/shipment.service';
import { OcSpecService } from './api/spec.service';
import { OcSpendingAccountService } from './api/spendingAccount.service';
import { OcSupplierService } from './api/supplier.service';
import { OcSupplierAddressService } from './api/supplierAddress.service';
import { OcSupplierUserService } from './api/supplierUser.service';
import { OcSupplierUserGroupService } from './api/supplierUserGroup.service';
import { OcUserService } from './api/user.service';
import { OcUserGroupService } from './api/userGroup.service';
import { OcAuthService } from './api/auth.service';
import { OcTokenService } from './api/token.service';

@NgModule({
  imports:      [ CommonModule, HttpClientModule ],
  declarations: [],
  exports:      [],
  providers: [
    OcAddressService,
    OcAdminAddressService,
    OcAdminUserService,
    OcAdminUserGroupService,
    OcApprovalRuleService,
    OcBuyerService,
    OcCatalogService,
    OcCategoryService,
    OcCostCenterService,
    OcCreditCardService,
    OcImpersonationConfigService,
    OcIncrementorService,
    OcLineItemService,
    OcMeService,
    OcMessageSenderService,
    OcOrderService,
    OcPasswordResetService,
    OcPaymentService,
    OcPriceScheduleService,
    OcProductService,
    OcPromotionService,
    OcSecurityProfileService,
    OcShipmentService,
    OcSpecService,
    OcSpendingAccountService,
    OcSupplierService,
    OcSupplierAddressService,
    OcSupplierUserService,
    OcSupplierUserGroupService,
    OcUserService,
    OcUserGroupService,
    OcAuthService,
    OcTokenService
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
