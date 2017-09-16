import { Component, OnInit } from '@angular/core';
import {ForumDirectoryService} from './forum-directory.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum-directory.component.html',
  styleUrls: ['./forum-directory.component.scss']
})
export class ForumDirectoryComponent implements OnInit {

  forums: Object[] = [{
    name: 'Forum 1',
    description: 'Lorem ipsum dolor sit amet, consectetur ' +
        'adipiscing elit. Cras commodo commodo ipsum sed aliquet. ' +
        'Morbi eu ligula nulla. Nam sagittis turpis id mauris molestie ' +
        'pulvinar. Sed commodo rutrum arcu sed pretium. Nulla tincidunt ' +
        'malesuada nibh efficitur pharetra. Vestibulum scelerisque ' +
        'ultricies nisi eget dignissim. Etiam sit amet tortor porttitor ' +
        'magna rutrum volutpat gravida a neque. Sed eu justo lobortis ex ' +
        'consequat tristique at eget dolor. Maecenas hendrerit nisl ex, viverra faucibus ' +
        'orci blandit id. Sed vel libero ultricies, laoreet velit ac, sagittis augue. ' +
        'Suspendisse quis felis eu ligula suscipit fringilla. Sed eros enim, fringilla ' +
        'non venenatis a, iaculis ut leo. Etiam nec enim malesuada, suscipit eros eu, dignissim metus.'
  },
      {
          name: 'Forum 2',
          description: 'Lorem ipsum dolor sit amet, consectetur ' +
              'adipiscing elit. Cras commodo commodo ipsum sed aliquet. ' +
              'Morbi eu ligula nulla. Nam sagittis turpis id mauris molestie ' +
              'pulvinar. Sed commodo rutrum arcu sed pretium. Nulla tincidunt ' +
              'malesuada nibh efficitur pharetra. Vestibulum scelerisque ' +
              'ultricies nisi eget dignissim. Etiam sit amet tortor porttitor ' +
              'magna rutrum volutpat gravida a neque. Sed eu justo lobortis ex ' +
              'consequat tristique at eget dolor. Maecenas hendrerit nisl ex, viverra faucibus ' +
              'orci blandit id. Sed vel libero ultricies, laoreet velit ac, sagittis augue. ' +
              'Suspendisse quis felis eu ligula suscipit fringilla. Sed eros enim, fringilla ' +
              'non venenatis a, iaculis ut leo. Etiam nec enim malesuada, suscipit eros eu, dignissim metus.'
      },
      {
          name: 'Forum 3',
          description: 'Lorem ipsum dolor sit amet, consectetur ' +
          'adipiscing elit. Cras commodo commodo ipsum sed aliquet. ' +
          'Morbi eu ligula nulla. Nam sagittis turpis id mauris molestie ' +
          'pulvinar. Sed commodo rutrum arcu sed pretium. Nulla tincidunt ' +
          'malesuada nibh efficitur pharetra. Vestibulum scelerisque ' +
          'ultricies nisi eget dignissim. Etiam sit amet tortor porttitor ' +
          'magna rutrum volutpat gravida a neque. Sed eu justo lobortis ex ' +
          'consequat tristique at eget dolor. Maecenas hendrerit nisl ex, viverra faucibus ' +
          'orci blandit id. Sed vel libero ultricies, laoreet velit ac, sagittis augue. ' +
          'Suspendisse quis felis eu ligula suscipit fringilla. Sed eros enim, fringilla ' +
          'non venenatis a, iaculis ut leo. Etiam nec enim malesuada, suscipit eros eu, dignissim metus.'
      }];

  constructor(private _forumService: ForumDirectoryService) { }

  ngOnInit() {
  }

}
