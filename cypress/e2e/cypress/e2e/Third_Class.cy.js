const URl = "http://172.27.1.149/login"
const username = Cypress.env('username')
const password = Cypress.env('password')
it('const,network interceptor(json),within,dropdown,environment,photo-attach', () => {

//  cy.visit(Cypress.env('staging_url'))


  //using const
  cy.visit(URl)
    cy.get('[name= "username"]').type(username)
    cy.get('[name= "password"]').type(password)
    cy.get(".rounded-sm").eq(4).click()
    // cy.wait('@prelogin')
    cy.intercept('GET','http://172.27.1.147:8888/auth/api/user/profile-image').as('postlogin')
    cy.wait('@postlogin')

    // language
    cy.get(".font-medium").eq(2).click({force:true});
    cy.get(".font-medium").eq(3).click({force:true});
    cy.wait(1000)

       //within
    cy.get('.w-full').eq(0).within(()=>{
    cy.get('.z-40').should('exist') 
    cy.get('.mx-auto').eq(1).should('exist') 
  
     
 })
 
    // companyregistration
    cy.get(':nth-child(2) > .items-start > .rounded-sm > .flex').click();
    cy.wait(1000)

    cy.get('.text-gray-700').click({force:true})
    cy.get(':nth-child(4) > .justify-end > .text-white').click({force:true})
    cy.get(':nth-child(12) > :nth-child(1) > .css-1ue3l7a-container > .css-2lg52e > .css-xqn7vz').click({force:true})
    cy.get('#react-select-5-option-0').click({force:true})
    cy.get('#identificationDocNo').type('2050111903')

     

    // Identification issue date
    // Dropdown

    cy.get(':nth-child(14) > :nth-child(1) > .cursor-pointer.undefined > .cursor-pointer').click({force:true})
    cy.get(':nth-child(2) > .relative > .font-normal').click({force:true})
    cy.wait(1000)
    cy.get('.pl-0 > :nth-child(4)').click({force:true})
    // // Identification issue date
    cy.get(':nth-child(4) > :nth-child(2) > .text-center').click({force:true})
    // // Issue District
    cy.get(':nth-child(15) > :nth-child(1) > .css-1ue3l7a-container > .css-2lg52e').click({force:true})
    cy.get('#react-select-2-option-34').click({force:true})
    // // Pan Number
    cy.get('#panNo').type('19543763443')
    // // Investment Source
    cy.get(':nth-child(17) > :nth-child(1) > .css-1ue3l7a-container > .css-2lg52e').click({force:true})
    cy.get('#react-select-3-option-2').should('exist')
    cy.get('#react-select-3-option-2').click({force:true})
    // // Investment Amount
    cy.get('#investmentAmount').type('20000000')
    // // shareholder type
    cy.get('#position-DIRECTOR').click({force:true})
    // Number of Shares 
    cy.get('#noOfShares').type('200000')
    // File Upload 
    cy.get('.justify-start').eq(33).attachFile("/signature.png", { subjectType: 'drag-n-drop' })




        
})