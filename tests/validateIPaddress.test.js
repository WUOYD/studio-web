import { test } from 'vitest'
import { validateIPaddress } from '../src/trace.js'

test('getLocation API Test', async () => {
    const ip1 = "147.88.201.68";
    const ip2 = "147.88.201.XY";
    const ip3 = "147.$12.201.68";
    expect(validateIPaddress(ip1)).toBe(true);
    expect(validateIPaddress(ip2)).toBe(false);
    expect(validateIPaddress(ip3)).toBe(false);
})