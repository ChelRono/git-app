import { TestBed } from '@angular/core/testing';

import { GitService } from './git.service';

describe('GithubServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitService = TestBed.get(GitService);
    expect(service).toBeTruthy();
  });
});