import { NgModule } from '@angular/core';
import { FinvestScrollResetDirective } from '@finvest/directives/scroll-reset/scroll-reset.directive';

@NgModule({
    declarations: [
        FinvestScrollResetDirective
    ],
    exports: [
        FinvestScrollResetDirective
    ]
})
export class FuseScrollResetModule {
}
