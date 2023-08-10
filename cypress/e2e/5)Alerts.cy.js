/// <reference types="Cypress" />  

describe('Alerts', () => {

    //1) javascript Alert: It will show some text and an "OK" button

     it('Js alert ', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get('button[onclick="jsAlert()"]').click();

        cy.on('window:alert',(t)=>{

            expect(t).to.contains('I am a JS Alert');
        })

        //alert window auto closed by cypress

        cy.get('#result').should('have.text','You successfully clicked an alert')
         
     });

     //2) Javascript Confirm Alert: It will  have some text with 'OK' and 'Cancel' buttons

     it('Js confirm Alert - OK BUTTON', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get('button[onclick="jsConfirm()"]').click();

        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');

        })

        //alert window auto closed by cypress by using ok button-default
        cy.get('#result').should('have.text','You clicked: Ok')



     });

     it('Js confirm Alert - CANCEL BUTTON', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.get('button[onclick="jsConfirm()"]').click();

        cy.on('window:confirm',(t)=>{
            expect(t).to.contains('I am a JS Confirm');

        })

        //use cancel button automatically
        cy.on('window:confirm',()=>false);

        //alert window auto closed by cypress by using cancel button-default
        cy.get('#result').should('have.text','You clicked: Cancel')



     });

     //3) Javascript Prompt Alert: It will have some text with a text box for user input along with 'OK'

     it('Js Prompt Alert', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then((win)=>{

            cy.stub(win,'prompt').returns('welcome');

            cy.get('button[onclick="jsPrompt()"]').click()

            //cypress will auto close prompted alert- it will use OK button -by default

             //use cancel button automatically
            // cy.on('window:prompt',()=>false);


            cy.get('#result').should('have.text','You entered: welcome');


        })

     });

     //4) Authenticated Alert


     it.only('Js Prompt Alert', () => {


        cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:
        {username:"admin", password:"admin"}})

        cy.get('.example').should('have.contain','Congratulations')

    

        });




        

        


     });

    

