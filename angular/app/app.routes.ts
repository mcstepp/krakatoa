import { Routes, RouterModule } from '@angular/router';

import { ForumDirectoryComponent } from './forum-directory/forum-directory.component';
import { ForumViewComponent } from './forum-view/forum-view.component';
import { ThreadViewComponent } from './thread-view/thread-view.component';
import {ForumComponent} from './forum/forum.component';

const routes: Routes = [{
             path: 'm',
             children: [{
                    path: '',
                    redirectTo: 'forum',
                    pathMatch: 'full'
                },
                {
                    path: 'forum',
                    component: ForumComponent,
                    children: [{
                            path: '',
                            component: ForumDirectoryComponent
                        },
                        {
                            path: ':fid',
                            component: ForumViewComponent
                        },
                        {
                            path: ':fid/thread',
                            redirectTo: ':fid',
                            pathMatch: 'full'
                        },
                        {
                            path: ':fid/thread/:tid',
                            component: ThreadViewComponent
                        }
                    ]
                }
         ]}
];

export const appRoutingProviders: any[] = [

];

export const appRoutes: any = RouterModule.forRoot(routes);
