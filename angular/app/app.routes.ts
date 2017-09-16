import { Routes, RouterModule } from '@angular/router';

import { ForumDirectoryComponent } from './forum-directory/forum-directory.component';
import { ForumViewComponent } from './forum-view/forum-view.component';
import { ThreadViewComponent } from './thread-view/thread-view.component';
import {ForumComponent} from './forum/forum.component';

const routes: Routes = [{
            path: 'm',
            children: [
                {
                    path: '',
                    redirectTo: 'forum',
                    pathMatch: 'full'
                },
                {
                    path: 'forum/:fid',
                    component: ForumComponent,
                    children: [
                        {path: '', component: ForumViewComponent},
                        {path: 'thread', redirectTo: '', pathMatch: 'full'},
                        {path: 'thread/:tid', component: ThreadViewComponent}
                    ]
                },
                {
                    path: 'forum',
                    component: ForumDirectoryComponent
                }
            ]
        }];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes);
