/// <reference types="Cypress" />  

/*
HOOKS

before |  this is being executed before all blocks just once

after |  opposite of before

beforeEach |  this is being executed before each block. if you have 4 it blocks, then this will be executed 4 times.before every block.

AfterEach  | opposite of beforeEach



TAGS

we used tags before. for example:
.skip
.only

we use tags for implement any specific event for any 'it' block.
*/
describe('MyTestSuite', () => {

    before(()=>{
        cy.log(' **** launch app ****');
    })

    after(()=>{
        cy.log('**** close app ****');
    })


    beforeEach(()=>{

        cy.log('**** login ****');


    })

    afterEach(()=>{
        cy.log('**** logout ****');
    })



    it('Search', () => {

        cy.log(" **** searching  *****");

    });

    it('Advanced search', () => {

        cy.log(" **** advanced searching  *****");

        

    });

    it('Listing products',()=>{

        cy.log(" **** listing products  *****");




    })
    
});