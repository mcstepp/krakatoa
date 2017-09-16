import { Routes, RouterModule } from '@angular/router';

import { ForumDirectoryComponent } from './forum-directory/forum-directory.component';

const routes: Routes = [
    {
        path: 'm',
        children: [
            {path: '',
            redirectTo: 'forum',
            pathMatch: 'full'},
            {path: 'forum',
            component: ForumDirectoryComponent }
        ]
    }
];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes);
