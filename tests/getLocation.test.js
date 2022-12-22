import { test } from 'vitest'
import { getLocation } from '../src/trace.js'

test('getLocation API Test', async () => {
    let ip = "147.88.201.68"
    let jsonData = await getLocation(ip);
    expect(JSON.stringify(jsonData)).toContain("Hochschule Luzern");
})