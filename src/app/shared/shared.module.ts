import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class SharedModule {

    static forRoot(): ModuleWithProviders<SharedModule> {
        return {
            ngModule: SharedModule,
            providers: []
        };
    }

}
