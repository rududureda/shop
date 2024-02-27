import { handleSort } from './sortUtils';

const data = [{ title: 'c' }, { title: 'b' }, { title: 'a' }];

it('should sort array of object', () => {
  const data = [{ title: 'c' }, { title: 'b' }, { title: 'a' }];

  const result = handleSort(data, 'az');
  expect(result).toEqual([{ title: 'a' }, { title: 'b' }, { title: 'c' }]);
});

it('should dort from Z to A', () => {
  const result = handleSort(data);
  expect(result).toEqual([{ title: 'c' }, { title: 'b' }, { title: 'a' }]);
});

it('should return empty array if not array is provided', () => {
    expect(handleSort()).toEqual([]);
    expect(handleSort('string')).toEqual([]);
    expect(handleSort(123)).toEqual([]);
    expect(handleSort({})).toEqual([]);
    expect(handleSort(null)).toEqual([]);
    expect(handleSort(undefined)).toEqual([]);
  });