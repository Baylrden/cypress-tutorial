// go()

describe('MySuite', () => {

    it('NavigationTest', () => {

        cy.visit('https://demo.opencart.com/');
        cy.title().should('eq','Your Store');  //Home page

        cy.get(':nth-child(7) > .nav-link').click();

        cy.get('h2').should('have.text','Cameras'); //cameras page

        cy.wait(3000)

        cy.go('back');  // go back to the home page
        cy.title().should('eq','Your Store');

        cy.wait(3000)

        cy.go('forward'); // go to the cameras page

        cy.get('h2').should('have.text','Cameras'); //cameras page validation

        cy.go(-1); // go to the home page
        cy.title().should('eq','Your Store');  //Home page validation

        cy.go(1); //go to the camera page

        cy.wait(2000)

        cy.reload(); // reload the page
        
    });
    
});