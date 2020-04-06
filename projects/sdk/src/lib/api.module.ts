import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Configuration } from './Configuration';

@NgModule({
  imports:      [ CommonModule, HttpClientModule ]
})
export class OrderCloudModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: OrderCloudModule,
            providers: [ 
                { provide: Configuration, useFactory: configurationFactory }
            ]
        }
    }

    constructor( @Optional() @SkipSelf() parentModule: OrderCloudModule) {
        if (parentModule) {
            throw new Error('OrderCloudModule is already loaded. Import your base AppModule only.');
        }
    }
}
