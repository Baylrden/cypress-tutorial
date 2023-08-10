
describe('CSSLocators', () => {

    it('cssLocators', () => {

        cy.visit('http://www.automationpractice.pl/index.php');
        cy.get('.search_query').type("T-SHIRTS")  //class

        cy.get(".button-search").click();

        cy.get(".lighter").contains("T-SHIRTS")  //Assertion

        
        
    });
    
});