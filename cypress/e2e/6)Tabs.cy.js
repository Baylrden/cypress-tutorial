/// <reference types="Cypress" />  

describe('Handle tabs', () => {

    it('approach1', () => {

        cy.visit('https://the-internet.herokuapp.com/windows')  //parent tab

    //we deleted target attribute and clicked to the button
        cy.get('a[href="/windows/new"]').invoke('removeAttr','target').click() //clicking on link

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new') //child tab is appeared
        

        cy.wait(5000);

        cy.go('back');  //back to the parent tab
    });



    it.only('approach2', () => {

        cy.visit('https://the-internet.herokuapp.com/windows')  //parent tab

    
        cy.get('a[href="/windows/new"]').then((e)=>{

            let url = e.prop('href');

            cy.visit(url);
        })

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new') //child tab is appeared
        

        cy.wait(5000);

        cy.go('back');  //back to the parent tab

        
    });
    
});