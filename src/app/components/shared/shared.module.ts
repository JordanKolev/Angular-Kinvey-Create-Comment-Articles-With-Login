import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
    declarations: [
        ContentComponent,
        FooterComponent,
        HeaderComponent,

    ],
    imports: [
        CommonModule,
        RouterModule,
    ],
    exports: [
        ContentComponent,
        FooterComponent,
        HeaderComponent,
    ]
})

export class SharedModule { }
