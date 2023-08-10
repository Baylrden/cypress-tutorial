/// <reference types="Cypress" />  


describe('Check UI Elements', () => {

    /*
    it('Checking Radio Buttons', () => {

        cy.visit('https://itera-qa.azurewebsites.net/home/automation');

        //visibility of radio buttons
        cy.get('#male').should('be.visible')
        cy.get('#female').should('be.visible')

        //selecting radio buttons
        cy.get('#male').check().should('be.checked')
        cy.get('#female').should('not.be.checked')


        //opposite process
        cy.get('#female').check().should('be.checked')
        cy.get('#male').should('not.be.checked')


    });
    */
    
    it('Checking Check Boxes', () => {

        cy.visit('https://itera-qa.azurewebsites.net/home/automation');

        //visibility of the element
       // cy.get('#monday').should('be.visible')

        //Selecting single checkbox
       //cy.get('#monday').check().should('be.checked')

        //Unselecting checkbox. we use  "uncheck()" method.
        //cy.get('#monday').uncheck().should('not.be.checked')

        //Selecting all the checkboxes
        //cy.get(".form-check-input[type='checkbox']").check().should('be.checked')

        //Unselecting all the checkboxes
       // cy.get(".form-check-input[type='checkbox']").uncheck().should('not.be.checked')
      
        //selecting first checkbox
        cy.get(".form-check-input[type='checkbox']").first().check().should('be.checked')
        // selecting last
        cy.get(".form-check-input[type='checkbox']").last().check().should('be.checked')


        

    });


});