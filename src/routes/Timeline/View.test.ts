import { cardsReducer } from './View';
import { ReceivedEvent } from '../../utils/const';

describe('cardsMapper', () => {
  const mapped = cardsReducer([ReceivedEvent, ReceivedEvent]);
  test('reduce duplicate 2 user length be 1', () => {
    expect(mapped.length).toBe(1);
  });
  test('repos length to be 2', () => {
    expect(mapped[0].repos.length).toBe(2);
  });
});
