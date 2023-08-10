/// <reference types="Cypress" /> 
// click on link using label
// over writing existing contains() command
// re-usuable custom command

describe('Custom Commands', () => {

    it("Handling Links",()=>{

        cy.visit('https://demo.nopcommerce.com/')

        //direct approach without using custom command
        // cy.get(':nth-child(2) > .product-item > .details > .product-title > a').click();

       //using custom command
       cy.clickLink('Apple MacBook Pro 13-inch')
        cy.get('.product-name').should('have.text','Apple MacBook Pro 13-inch');
    })


    it("Overwriting existing command",()=>{

        cy.visit('https://demo.nopcommerce.com/')


         //using custom command
       cy.clickLink('APPLE MACBOOK PRO 13-inch')
       cy.get('.product-name').should('have.text','Apple MacBook Pro 13-inch');


        
    })


    it.only("Login command",()=>{

        cy.visit('https://demo.nopcommerce.com/')

        //Login
        //Search

        cy.clickLink('Log in'); //custom command
        cy.loginapp('testing@gmail.com','test123') //custom command

        cy.get('.ico-account').should('have.text','My account');







        
    })
    
});