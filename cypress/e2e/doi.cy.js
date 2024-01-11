// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })
describe('template spec', () => {

 

 

 

  beforeEach(()=> {

 

    cy.visit('http://192.168.50.139:3001/#/auth/login')

 

    cy.get("#username").type("ImonShrestha")

 

    cy.get("#password").type("Awesome@994")

 

    cy.get(".w-100").eq(1).click()

 

    cy.get(".modal-footer>.btn-danger").eq(0).click()

 

    cy.wait(1000)

 

  })

 

  it('passes', () => {

 

  cy.get(".justify-content-sm-end>.w-100>.d-flex >.ng-star-inserted").click({force:true})

 

  // cy.get('.ng-star-inserted').eq(0).click()
  cy.get(".header-01>.header-container>.left>.mastermenu-header>.text-white>.ic-menu").eq(0).click({force:true})

 

  // TOR

 

  cy.get(".scrollable>.ng-star-inserted>.nav-link ").eq(4).click({force:true})

 

  cy.get(".sidebar-link").eq(0).click({force:true})

 

  cy.get(".btn-success").eq(0).click({force:true});

  

  // cy.get('.input-group>#button-addon2').eq(3).click({force:true});
  
  // cy.get(".form-control-icon>.form-control").eq(0).click({force:true})
  // cy.get('.ng-star-inserted').contains('Daisy Food and Packaging').dbclick({force:true});

 

 

 

 

  // type code for search

 


 

  // type("Sonapur Minerals and Oil Limited")

 

 

 

 

 

  // IR

 

  // cy.get(".mt-3>.col-lg-7>.row>.ng-star-inserted>.card-stats>.justify-content-center>").eq(0).click({force:true})

 

  // cy.get(".btn-success").eq(0).click({force:true})

 

 

 

  // cy.get('.modal-backdrop')

 

  //  cy.get('.modal-backdrop').eq(0).click()

 

 

 

  // cy.get('.col-lg-7 > .row > :nth-child(1)').click()

 

  //  cy.get('.row').eq(0).find('Industry Registration').click()

 

   

 

 

 

  })

 

})