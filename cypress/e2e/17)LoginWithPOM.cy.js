//import LoginTest from "../PageObjects/LoginPage";
import LoginTest from "../PageObjects/LoginPage2";

describe('POM', () => {

    //General approach
    it('LoginTest', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.get('input[placeholder="Username"]').type('Admin');
        cy.get('input[placeholder="Password"]').type('admin123');
        cy.get('button[type="submit"]').click();


    });

    //using POM
    it('LoginTest', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/');

       const ln = new LoginTest();

       ln.setUserName('Admin');
       ln.setPassword('admin123')
       ln.clickSubmit();
       ln.verifyLogin();
    
});


 //using POM with fixture
 it.only('LoginTest', () => {

    cy.visit('https://opensource-demo.orangehrmlive.com/');


    cy.fixture('orangehrm.json').then((data)=>{

        const ln = new LoginTest();

        ln.setUserName(data.username);
        ln.setPassword(data.password)
        ln.clickSubmit();
        ln.verifyLogin();

    })
});

});