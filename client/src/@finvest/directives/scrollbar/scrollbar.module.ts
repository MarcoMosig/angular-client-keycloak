import { NgModule } from '@angular/core';
import { FinvestScrollbarDirective } from '@finvest/directives/scrollbar/scrollbar.directive';

@NgModule({
    declarations: [
        FinvestScrollbarDirective
    ],
    exports: [
        FinvestScrollbarDirective
    ]
})
export class FinvestScrollbarModule {
}
