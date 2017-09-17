import { TestBed, inject } from '@angular/core/testing';

import { ForumDirectoryService } from './forum-directory.service';

describe('ForumDirectoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForumDirectoryService]
    });
  });

  it('should ...', inject([ForumDirectoryService], (service: ForumDirectoryService) => {
    expect(service).toBeTruthy();
  }));
});
