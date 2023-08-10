describe('MySuite', () => {

    it('Capture screenshots & videos', () => {

        cy.visit('https://demo.opencart.com/');

       // cy.screenshot('homepage'); // you can write anything you want. it is name of your screenshot file.

      //  cy.wait(4000)

        cy.get('img[title="Your Store"]').screenshot('logo'); //capturing ss of specific element.
        
        //Automatically capture screenshot & video on fail - only when you execute throigh CLI

        cy.get(':nth-child(7) > .nav-link').click(); //cameras

        cy.get('h2').should('have.text','Tablets')

        //we can get screenshot and video of failure. we use terminal:

        // npx cypress run --spec cypress/e2e/CaptureSSandVideos.cy.js
        
        // formule: npx cyprss run --spec {relative path of test file}

    });
    
});