
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
    // cy.get('.modal-backdrop').invoke('css', 'display', 'none');
    // TOR
    // cy.get(".scrollable>.ng-star-inserted>.nav-link ").eq(4).click({force:true})
    // cy.get(".sidebar-link").eq(0).click({force:true})
    // cy.get(".btn-success").eq(0).click({force:true});
    // cy.get('.input-group>#button-addon2').eq(3).click({force:true});
    // cy.get(".form-control-icon>.form-control").eq(0).click({force:true})
    // cy.get('.modal-body > .flex-grow-1.position-relative > :nth-child(1) > .position-relative > .table-border > .table-responsive > .table > tbody > :nth-child(1) > :nth-child(2)').click({force:true})
    // cy.get('.modal-backdrop').invoke('css', 'display', 'none');
    // cy.get('#industryAddress').should('be visible')
    // cy.get('form.ng-untouched > :nth-child(2) > .form-group > .input-group > #button-addon2').click({force:true})
    // cy.get('app-map > .col-lg-4 > .form-group > .input-group > .form-control').click({force:true})
    
    // Environment 
    // cy.get(':nth-child(5) > .mastermenu-link > span').click({force:true})
    // cy.get(':nth-child(2) > .sidebar-link').click({force:true})
    // cy.get('.btn-success').click({force:true})
    // cy.get('#remarks').should('exist');
    // cy.get(".form-control").eq(2).should('exist');
    // cy.get(".form-control").eq(2).type('ESA-39');

    // ESA-39




  
    })
  
  })