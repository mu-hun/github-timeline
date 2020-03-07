import createStore, { Store } from './createStore';

import { name } from '../utils/__mocks__/fetch';

jest.mock('../utils/fetch.ts');

const pageRange = 30;

describe('createStore', () => {
  let store: Store;
  beforeEach(async done => {
    store = createStore();
    store.setUsername();
    done();
  });
  test('set Name', () => {
    expect(store.username).toBe(name);
  });

  test('get events', async () => {
    await store.updateEvents();
    expect(store.page).toBe(2);
    expect(store.data.length).toBe(pageRange);

    await store.updateEvents();
    expect(store.page).toBe(3);
    expect(store.data.length).toBe(pageRange * 2);
  });
});
