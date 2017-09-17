import { Routes } from '@angular/router';
import { PokerListComponent } from './poker-list/poker-list.component';
import { WorkspaceComponent } from './workspace/workspace.component';

export const ROUTES: Routes = [
    { path: '', component: PokerListComponent },
    { path: 'workspace', component: WorkspaceComponent }
];
