// describe('template spec', () => {
//   
// })

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://172.27.1.149/login')
    // login
    cy.get("#username").type("kuul")
    cy.get("#password").type("Test@1234")
    cy.get(".rounded-sm").eq(4).click()
    cy.wait(1000)
    // language
    cy.get(".font-medium").eq(2).click({force:true});
    cy.get(".font-medium").eq(3).click({force:true});
    cy.wait(1000)
    // companyregistration
    cy.get(':nth-child(2) > .items-start > .rounded-sm > .flex').click();
    cy.wait(1000)

    function generalinfo(){
      cy.get(".rounded-sm").eq(1).click();
      cy.get(':nth-child(2) > .items-start > .rounded-sm > .flex > .font-normal').click();
      // province
      cy.wait(1000);
      // cy.get('.css-2lg52e').eq(0).click({force:true})
      cy.get('.mb-5 > .grid > :nth-child(1) > :nth-child(1) > .css-1ue3l7a-container > .css-2lg52e').click({force:true});
      cy.wait(2000);
      cy.get('#react-select-2-option-0').click();
      // district
      cy.get(':nth-child(2) > :nth-child(1) > .css-1ue3l7a-container > .css-2lg52e').click();
      cy.wait(2000);
      cy.get('#react-select-3-option-4').click();
      // localbody
      cy.get(':nth-child(3) > :nth-child(1) > .css-1ue3l7a-container > .css-2lg52e > .css-xqn7vz').click();
      cy.get('#react-select-4-option-5').click();
      // ward
      cy.get(':nth-child(4) > :nth-child(1) > .css-1ue3l7a-container > .css-2lg52e > .css-xqn7vz').click();
      cy.get('#react-select-5-option-1').click();
      // tolestreet
      cy.get('.w-full').eq(23).click({force:true});
      cy.wait(2000)
      cy.get('.items-center.justify-end > .flex > .text-white').click({force:true});
      // addressline1
      cy.get('#addressLine1').type('Kathmandu');
      // phonenumber
      cy.get('#phoneNumber').type('9823765374');
      // faxnumber
      cy.get('#faxNumber').type('865389646');
      // poboxnumber
      cy.get('#poBoxNumber').type('7859352573');
      // email
      cy.get('#officeEmail').type('testocr@yopmail.com');
      // website
      cy.get('#website').type('https://abce.com');
      cy.wait(1000);
      // Company Registered in Another Government Body ?
      cy.get('.mb-4 > .grid > :nth-child(1) > :nth-child(1) > .css-1ue3l7a-container > .css-2lg52e').click({force:true});
      cy.wait(1000);
      cy.get('#react-select-6-option-3').click();
      cy.get('#anotherGovernmentbodyRegistrationNumber').type('69');
      cy.get(':nth-child(3) > .grid > :nth-child(1) > :nth-child(1) > .css-1ue3l7a-container > .css-2lg52e').click()
      cy.get('#react-select-7-option-6').click();
      cy.wait(10000);
      cy.get('.px-3 > .flex > .font-normal').click({ multiple: true });

    }

    function companybranch(){
    // companybranch
    cy.wait(10000);
    cy.get('font-normal h-full text-center').eq(1).click({force:true});
    }
  
    function objectivedetails(){
     // Objectivedetails
    cy.get(':nth-child(1) > :nth-child(4) > .items-start > :nth-child(2) > .mr-4 > .flex > .text-gray-56').click();
    cy.wait(1000)
    cy.get(':nth-child(4) > .cursor-pointer').type('add');
    cy.get('[data-testid="dialog-element"] > .justify-end > .text-white').click();
    cy.get('.justify-end > .rounded-sm').click();
    cy.wait(10000);
    }
    
    function capitalstructure(){
    // capitalstructure
    cy.wait(1000)
    // Authorizedstructure
    cy.get('.border-b > :nth-child(1) > :nth-child(1) > .cursor-pointer').type('90000000');
    // IssuedCapital
    cy.get(':nth-child(5) > :nth-child(1) > :nth-child(1) > .cursor-pointer').type('80000000');
    // paid_up_capital
    cy.get(':nth-child(8) > :nth-child(1) > :nth-child(1) > .cursor-pointer').type('60000000');
    cy.get('.pb-3 > .text-white').click();
    }
   
    generalinfo();
    
    // Company_Shareholder
    


    


   
 
      })
})