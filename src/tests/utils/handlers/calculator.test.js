import { convertTime, getLimit, penaltiesArray } from '../../../utils/handlers/calculators';
import {object} from "prop-types";

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

test('Expect PenaltiesArray ti return an array', async () => {
    const pn = penaltiesArray();
    expect(pn).toBeInstanceOf(Array);
    // This test will be updated when penalties are added
    expect(pn).toStrictEqual([
            {
            "type": 1,
            "seconds": 200,
            "limit": 0,
            "running": 0,
            "active": 0,
            "direction": -1
        },
        {
            "type": 2,
            "seconds": 200,
            "limit": 0,
            "running": 0,
            "active": 0,
            "direction": -1
        },
        {
            "type": 3,
            "seconds": 200,
            "limit": 0,
            "running": 0,
            "active": 0,
            "direction": -1
        },
        {
            "type": 4,
            "seconds": 200,
            "limit": 0,
            "running": 0,
            "active": 0,
            "direction": -1
        },
        {
            "type": 5,
            "seconds": 200,
            "limit": 0,
            "running": 0,
            "active": 0,
            "direction": -1
        },
        {
            "type": 6,
            "seconds": 200,
            "limit": 0,
            "running": 0,
            "active": 0,
            "direction": -1
        }]
    )
})