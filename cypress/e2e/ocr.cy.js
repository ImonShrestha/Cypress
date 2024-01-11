// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

describe('template spec', () => {

  beforeEach(()=> {

    cy.visit('http://172.27.1.149/login')
    cy.get("#username").type("kuul")
    cy.get("#password").type("Test@1234")
    cy.get(".rounded-sm").eq(4).click()
    cy.wait(1000)
    cy.get(".rounded-sm").eq(1).click()
    cy.get(".flex-row>.font-normal").eq(6).click({force:true})
    // cy.get(".font-normal").eq(8).click({force:true})

  })

 

  it('passes', () => {

 

  cy.get(".mx-2").click()

 

  cy.get(".leading-6").eq(0).click()

 

 

 

 

 

  })

 

})