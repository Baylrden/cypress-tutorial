require('@cypress/xpath');

describe('Assertions demo', () => {

    it("Implicit assertions", ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        //should

        //INSTEAD OF THIS:

        /*
        cy.url().should('include','orangehrmlive.com');
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); //eq -> equality
        cy.url().should('contain','orangehrm'); 
        */


        //WE USE THIS:
        //i mean, we don't have to write multiple "cy.url()".
        //check the code below.

       /* 
       cy.url().should('include','orangehrmlive.com')
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //eq -> equality
        .should('contain','orangehrm'); 
        */


        //and

        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //eq -> equality
        .and('contain','orangehrm')
        .and('not.contain','greenhrm'); 

        cy.title().should('include','Orange')
        .and('eq', 'OrangeHRM')
        .and('contain','HRM')


        //Putting validation on logo

        cy.get('.orangehrm-login-branding > img').should('be.visible')  //logo visible
        .and('exist'); //logo exist

        cy.xpath("//a").should('have.length','5')  //No of links

        cy.get("input[placeholder='Username']").type("Admin") // provide a value into input box

        cy.get("input[placeholder='Username']").should('have.value','Admin') //value check

    })




    //EXPLICIT ASSERTIONS

    it("Explicit assertions", ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        
        cy.get("input[placeholder='Username']").type("Admin")

        cy.get("input[placeholder='Password']").type("admin123")

        cy.get('.oxd-button').click();

        let expName="John Wick";

        cy.get(".oxd-userdropdown-name").then( (x)=>{

            let actName = x.text();


            //BDD STYLE
            expect(actName).to.equal(expName)
           // expect(actName).to.not.equal(expName) opposite


           //TDD STYLE
           assert.equal(actName,expName)
         //  assert.notEqual(actName,expName)  opposite



        })

    })
    
    
});