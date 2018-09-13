import { UserVotesModule } from './user-votes.module';

describe('UserVotesModule', () => {
  let userVotesModule: UserVotesModule;

  beforeEach(() => {
    userVotesModule = new UserVotesModule();
  });

  it('should create an instance', () => {
    expect(userVotesModule).toBeTruthy();
  });
});
