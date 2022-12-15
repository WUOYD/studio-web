import Footer from '../src/trace.js'

test('getLocation API Test', async () => {
    let jsonData = getLocation("147.88.201.68");
    expect(jsonData).toContain('Hochschule Luzern');
})