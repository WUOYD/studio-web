describe('Searching for amazon.com should provide the location Hochschule Luzern as the first search result.', () => {
    it('passes', () => {
      cy.visit('http://127.0.0.1:5173/')
      cy.get('.cta-wrapper input[placeholder="example-domain.com"]').type("amazon.com")
      cy.get('.cta-wrapper .tracert-form').submit()
      cy.get('locations', { timeout: 60000 }).contains('Hochschule Luzern')
    })
  })