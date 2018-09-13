import { UserDesignIdeasModule } from './user-design-ideas.module';

describe('UserDesignIdeasModule', () => {
  let userDesignIdeasModule: UserDesignIdeasModule;

  beforeEach(() => {
    userDesignIdeasModule = new UserDesignIdeasModule();
  });

  it('should create an instance', () => {
    expect(userDesignIdeasModule).toBeTruthy();
  });
});
