import { NgModule } from '@angular/core';
import { FinvestUtilsService } from '@finvest/services/utils/utils.service';

@NgModule({
    providers: [
        FinvestUtilsService
    ]
})
export class FinvestUtilsModule {
    constructor(private _fuseUtilsService: FinvestUtilsService) {
    }
}
