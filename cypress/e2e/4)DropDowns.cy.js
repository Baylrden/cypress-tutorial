/// <reference types="Cypress" />  

describe('handle dropdowns', () => {

    it.skip('dropdown with select', () => {

        cy.visit('https://www.zoho.com/commerce/free-demo.html')

        cy.get('#zcf_address_country')
        .select('Turkey')
        .should('have.value','Turkey')
        
    });

    it.skip('dropdown without select', () => {

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

        cy.get('#select2-billing_country-container').click()

        //Typing "Azerbaijan" to input and pressing enter:
        cy.get('.select2-search__field').type('Azerbaijan').type('{enter}')
        
        cy.get('#select2-billing_country-container')
        .should('have.text','Azerbaijan')
        
    });

    it.skip('Auto suggest dropdown', () => {

        cy.visit('https://www.wikipedia.org/')

        cy.get('#searchInput').type('Azerbaijan')

        cy.get('.suggestion-link').contains('Azerbaijani Armed Forces').click()

        
    });


    it('Dynamic dropdown', () => {

        cy.visit('https://www.google.com/')

        cy.get('#APjFqb').type('cypress automation')

        cy.wait(3000)


        cy.get('.wM6W7d').should('have.length',12)

        cy.get('.wM6W7d').each( ($el, index, $list)=>{

            if($el.text()=='cypress automation tutorial'){
                cy.wrap($el).click()
            }



        })

        cy.get('.wM6W7d').should('have.value','cypress automation tutorial')

        
    });
    
});