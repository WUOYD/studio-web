describe('Searching for amazon.com should provide the location Hochschule Luzern as the first search result.', () => {
    it('passes', () => {
      cy.visit('http://127.0.0.1:5173/')
      cy.get('#header-form input[placeholder="example-domain.com"]').type("amazon.com")
      cy.wait(3000)
      cy.get('#header-form > button').click()
      cy.wait(60000)
      cy.get('.locations').contains('Hochschule Luzern')
    })
  })