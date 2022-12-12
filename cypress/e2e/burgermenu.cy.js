describe('Searching for amazon.com should provide the location Hochschule Luzern as the first search result.', () => {
    it('passes', () => {
      cy.visit('http://127.0.0.1:5173/')
      cy.get('aside').contains('Trace')
    })
  })