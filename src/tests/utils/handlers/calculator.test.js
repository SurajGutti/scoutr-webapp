import { convertTime, getLimit } from '../../../utils/handlers/calculators';

test('Expect 5 minutes and 60 seconds to be 340 seconds', async () => {
    const timeInSec = await convertTime(5, 40);
    expect(timeInSec).toBe(340);
});

test.each`
  time  | limit
  ${10} | ${1800}
  ${45} | ${3600}
  ${70} | ${4500}
  ${85} | ${5400}
`('Expect stopwatch to be $limit for $time', async ({time, limit}) => {
    expect(await getLimit(time)).toBe(limit);
})