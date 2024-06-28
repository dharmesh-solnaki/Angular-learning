import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesigncomponentsComponent } from './designcomponents/designcomponents.component';
import { UidesignComponent } from './uidesign.component';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTabsModule} from '@angular/material/tabs';
import { MatTooltipModule} from '@angular/material/tooltip';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { MuitableComponent } from './muitable/muitable.component';
import { MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
  declarations: [UidesignComponent, DesigncomponentsComponent, DialogComponent, MuitableComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule,MatDialogModule,
    MatPaginatorModule,
    MatSnackBarModule,MatTabsModule,
    MatTooltipModule,MatSidenavModule,MatIconModule,MatTableModule,MatDividerModule
  ],
})
export class UidesignModule {}
