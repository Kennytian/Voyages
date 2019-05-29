import { isDiff } from '../../src/utils/object-diff';

describe('object-diff', () => {
  it('not diff', () => {
    const obj1 = { name: '新中国', from: 1959, area: 9600000 };
    const obj2 = { from: 1959, name: '新中国', area: 9600000 };
    expect(isDiff(obj1, obj2, {}, {})).not.toBeTruthy();
  });

  it('is diff', () => {
    const obj1 = { name: '新中国', from: 1959, area: 9600000 };
    const obj2 = { name: '中国', from: 1959, area: 9600000 };
    expect(isDiff(obj1, obj2, {}, {})).toBeTruthy();
  });
});
