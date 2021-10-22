import { PascalCasePipe } from './pascalcase.pipe';

describe('pascalcase', () => {
  it('create an instance', () => {
    const pipe = new PascalCasePipe();
    expect(pipe).toBeTruthy();
  });
});
