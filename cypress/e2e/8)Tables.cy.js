/// <reference types="Cypress" />  

describe('Handle Tables', () => {
    

    //beforeEach means that when every "it" block run, this "beforeEach" section will run firstly. 
    //Like we say: run it "before each" it block.
    beforeEach('login',() => {
        
        cy.visit('https://demo.opencart.com/admin/index.php')

        cy.get('#input-username').type('demo');
        cy.get('#input-password').type('demo');
        cy.get('button[type="submit"]').click();

        //We logged in.

        //Now we should go "customers" submenu and then click to the "customers"
        cy.get('.btn-close').click();

        cy.get('a[href="#collapse-5"]').click(); //customers main menu

        cy.get('#collapse-5 > :nth-child(1) > a').click(); //customers sub item


    });

    it.skip('Check Number of the Rows & Columns', () => {

        cy.get('.table.table-bordered.table-hover>tbody>tr').should('have.length','10');
        cy.get('.table.table-bordered.table-hover>thead>tr>td').should('have.length','7');

        
    });

    it.skip('Check cell data from specific row & Column', () => {

        cy.get(':nth-child(5) > :nth-child(3)').contains('demo234566@gmail.com')
        
    });

    it.skip('Read all the rows & Columns data in the first page', () => {
        
        cy.get('.table.table-bordered.table-hover>tbody>tr')
        .each( ($row, index, $rows)=>{

            cy.wrap($row).within(()=>{

                cy.get('td').each(($col, index, $cols)=>{
                    cy.log($col.text());
                })
            })


        })

    });

    it('Pagination', () => {

        //find total number of pages
       /* cy.get('.col-sm-6.text-end').then((e)=>{

            let myText = e.text();  //Showing 1 to 10 of 14296 (1430 Pages)

           let totalPages = myText.substring( myText.indexOf("(")+1 , myText.indexOf("Pages")-1 );

           cy.log("Total number of pages in a table =====> "+ totalPages);

        })*/

        let totalPages = 5;

        for(let p=1;p<totalPages;p++){

            if(totalPages>1){

                cy.log("Active page is ===>"+p)

                cy.get(":nth-child("+p+") > .page-link").click();
                cy.wait(3000);

                cy.get('.table.table-bordered.table-hover>tbody>tr')
                .each( ($row, index, $rows )=>{
                    cy.wrap($row).within(()=>{

                        cy.get('td:nth-child(3)').then((e)=>{
                            cy.log(e.text());  //capturing only email 
                        })
                    })
                })


            }



        }


        
    });


});