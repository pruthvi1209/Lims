import {NgModule} from '@angular/core';

import { MatButtonModule , MatIconModule, MatFormFieldModule, MatInputModule,
     MatCheckboxModule, MatToolbarModule, MatSelectModule, MatOptionModule,
     MatCardModule, MatRadioModule, MatDialogModule, MatTabsModule} from '@angular/material';

@NgModule({
    imports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule,
         MatCheckboxModule, MatToolbarModule, MatSelectModule, MatOptionModule,
         MatCardModule, MatRadioModule, MatDialogModule, MatTabsModule],
    exports: [MatButtonModule, MatIconModule, MatFormFieldModule, MatInputModule,
         MatCheckboxModule, MatToolbarModule, MatSelectModule, MatOptionModule,
          MatCardModule, MatRadioModule, MatDialogModule, MatTabsModule]
})
export class MaterialModule {

}