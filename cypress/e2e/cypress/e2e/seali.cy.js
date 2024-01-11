describe('template spec', () => {
    it('passes', () => {
      cy.visit('http://172.27.1.149/login')
      // login
      cy.get("#username").type("kuul")
      cy.get("#password").type("Test@1234")
      cy.get(".rounded-sm").eq(4).click()
      cy.wait(1000)
    })
})


