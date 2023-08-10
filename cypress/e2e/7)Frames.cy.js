/// <reference types="Cypress" />  
import 'cypress-iframe'

describe('Handling Frames', () => {

    it('approach1', () => {

        cy.visit('https://the-internet.herokuapp.com/iframe')

       const iframe =  cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);

        iframe.clear().type('Welcome {cmd+a}');

        cy.get('[title="Bold"]').click();
        
    });
    

    it('approach2 - by using custom command', () => {

        cy.visit('https://the-internet.herokuapp.com/iframe')

         //used custom command. we created command in commands.js file. check it.
        cy.getIframe('#mce_0_ifr').clear().type('Welcome {cmd+a}')
        cy.get('[title="Bold"]').click();
        
    });


    it('approach3 - by using cypress iframe plugin', () => {

        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.frameLoaded('#mce_0_ifr');  //Load the frame

        cy.iframe('#mce_0_ifr').clear().type('Welcome {cmd+a}'); 

        cy.get('[title="Bold"]').click();
        
    });
});