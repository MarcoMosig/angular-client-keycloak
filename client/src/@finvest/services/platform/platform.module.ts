import { NgModule } from '@angular/core';
import { FinvestPlatformService } from '@finvest/services/platform/platform.service';

@NgModule({
    providers: [
        FinvestPlatformService
    ]
})
export class FusePlatformModule {
    constructor(private _fusePlatformService: FinvestPlatformService) {
    }
}
