describe('Searching for youtube.com should provide the location Hostpoint AG as the first search result.', () => {
    it('passes', () => {
      cy.visit('https://whattheweb.ch/')
      cy.get('#header-form input[placeholder="example-domain.com"]').type("youtube.com")
      cy.get('#header-form > button').click() 
      cy.wait(10000)
      cy.get('.locations').contains('Hostpoint AG')
    })
})  