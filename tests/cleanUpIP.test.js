import { test } from 'vitest'
import { cleanUpIP } from '../src/trace.js'

test('getLocation API Test', async () => {
    const tracertText = " 11     7 ms     8 ms     8 ms  reflectededge.reflected.net [66.254.114.41]";
    expect(cleanUpIP(tracertText)).toContain("66.254.114.41");
})