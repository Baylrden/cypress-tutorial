/// <reference types="Cypress" />  
import 'cypress-iframe'
require ('@4tw/cypress-drag-drop')

describe('Mouse Operations', () => {

    it('MouseHover', () => {

        cy.visit('https://demo.opencart.com/');

        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
        .should('not.be.visible');


        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click();



        cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link')
        .should('be.visible');   
    });




    it('Right click', () => {

        cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html');

        //Approach1
        /*  
        cy.get('.context-menu-one.btn.btn-neutral').trigger('contextmenu');
        cy.get('.context-menu-icon-copy > span').should('be.visible');
        */

        //Approach2

        cy.get('.context-menu-one.btn.btn-neutral').rightclick();
        cy.get('.context-menu-icon-copy > span').should('be.visible');

    });





    it('Double click', () => {

        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3');

        cy.frameLoaded('#iframeResult') //load the frame


        cy.iframe('#iframeResult').find('button[ondblclick="myFunction()"]').trigger('dblclick');
        cy.iframe('#iframeResult').find('#field2').should('have.value','Hello World!');
       

        
    });



    it('Drag and drop using plugin', () => {


        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')
        cy.get('#box6').should('be.visible')
        cy.get('#box106').should('be.visible')

        cy.wait(3000);
        cy.get('#box6').drag('#box106',{force:true});
        
    });




    it.only('Scrolling page', () => {

        cy.visit('https://www.countries-ofthe-world.com/flags-of-the-world.html')

        //Turkey flag 🇹🇷
        cy.get(':nth-child(2) > tbody > :nth-child(88) > :nth-child(1) > img').scrollIntoView({duration:2000});
        cy.get(':nth-child(2) > tbody > :nth-child(88) > :nth-child(1) > img').should('be.visible');

        cy.wait(2000);

        //Azerbaijan flag 🇦🇿
        cy.get(':nth-child(1) > tbody > :nth-child(12) > :nth-child(1) > img').scrollIntoView({duration:2000});
        cy.get(':nth-child(1) > tbody > :nth-child(12) > :nth-child(1) > img').should('be.visible');

        cy.wait(2000);


        //Footer
        cy.get('#footer').scrollIntoView({duration:2000});


        
    });


    
});