const { should } = require("chai")

describe('Http Request', () =>{

// GET Call - fetch

    it('GET call',() =>{
        cy.request('GET','https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('eq', 200 );
    })

    // POST CALL - create

    it('POST Call',()=>{
        cy.request({
            method:'POST',
            url:'https://jsonplaceholder.typicode.com/posts/',
            body: {
                title:"Test post",
                body:"This is post call",
                userId:1                
            }   
        })
          .its('status')
          .should('equal',201);
    })

    //PUT CALL - Update

    it('PUT',() =>{
        cy.request({
            method:'PUT',
            url:'https://jsonplaceholder.typicode.com/posts/1',
            body: {
                title:"Test post - Updated",
                body:"This is post call",
                userId:1,
                id:1             
            } 
        })
        .its('status')
        .should('equal',200);
    })

    // DELETE  CALL 

    it("DELETE",()=>{
        cy.request({
            method:'DELETE',
            url:'https://jsonplaceholder.typicode.com/posts/1',
        })
        .its('status')
        .should('equal',200);

    })

    })
