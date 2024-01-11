
describe('template spec', () => {
    beforeEach(()=>{
        cy.visit('/')

    })
    
    it('Login with input field', () => {
      // login
    expect (cy.config('viewportHeight')).to.equal(1080)
    expect (cy.config('viewportWidth')).to.equal(1920)

    cy.get("#username").type("kuul",{delay:500})
    cy.get("#username").should('have.value', 'kuul');
    cy.get("#password").type("Test@1234",{delay:500});
    cy.get('form.w-full > :nth-child(2) > :nth-child(1) > .font-normal').should('exist').and('have.text','पासवर्ड');
    cy.get(".rounded-sm").eq(4).click()
    cy.wait(1000)

      // language
    cy.get(".font-medium").eq(2).click({force:true});
    cy.get(".font-medium").eq(3).click({force:true});
    cy.wait(1000)
    cy.get(':nth-child(2) > .items-start > .rounded-sm > .flex').click({force:true});
    cy.wait(3000)
    cy.go('back')
    cy.pause()
    cy.go('forward')
    
    })

it.skip('Login with correct username and incorrect password', () => {
 cy.get("#username").as('user')
 cy.get("@user").type("shikhar")
 cy.get("#password").type("Test@123");
 cy.get(".rounded-sm").eq(4).click()
})

it('Login with incorrect username and incorrect password', () => {
 cy.get("#username").as('user')
 cy.get("@user").type("private")
 cy.get("#password").type("Test@123");
 cy.get(".rounded-sm").eq(4).click()
    
})

it('Login with correct username and correct password', () => {
 cy.get("#username").as('user')
 cy.get("@user").type("publicjgp")
 cy.get("#password").type("Test@1234");
 cy.get(".rounded-sm").eq(4).click()
})

it('URLInclude', () => {
 cy.get("#username").as('user')
 cy.get("@user").type("publicjointven")
 cy.get("#password").type("Test@1234");
 cy.get(".rounded-sm").eq(4).click()
 cy.visit("/company-registration/capital-structure")
 cy.url().should("include","/company-registration/capital-structure");


})
   it('Title Check', () => {
    cy.get("#username").as('user')
    cy.get("@user").type("kuul")
    cy.get("#password").type("Test@1234");
    cy.get(".rounded-sm").eq(4).click()
    cy.title().should('include','Company Registration')
    cy.title().should('contains','Company Registration')

    })

    it('Title Check eq and have class', () => {
    cy.get("#username").as('user')
    cy.get("@user").type("kuul")
    cy.get("#password").type("Test@1234");
    cy.get(".rounded-sm").eq(4).click()
    cy.title().should('eq','Online Company Registration')
    cy.get('.font-medium').should('have.class','font-medium')
    })

    // it('logo check with find and have length ', () => {
    //     cy.get("#username").as('user')
    //     cy.get("@user").type("kuul")
    //     cy.get("#password").type("Test@1234");
    //     cy.get(".rounded-sm").eq(4).click()
    //     cy.get('.mt-10 > .object-contain').should('exist')
    //     cy.get('.mt-10 > .object-contain').should('be.visible')
    //     .and ('have.css', 'width', '96px')
    //     .and ('have.css', 'height', '80px');
    //     cy.get('.rounded-sm').find('.items-center').should('have.length',2)
    //     })

});