const { method } = require("bluebird")
const { expect } = require("chai")

describe('API Automation Using Cypress',()=>{

    it('Get Users', ()=>{
        cy.request({
            method:'GET',
            url:'https://gorest.co.in/public/v2/users',
            Headers:{
                Authorization:'Bearer 5da4283251f9409d5f5e6d210978e278a4a0df1be7c5f7b7662f7d3b5e6f2f8b'
            }
        })
        .then((Response)=>{
            cy.log(JSON.stringify(Response))
            expect(Response.status).to.eq(200)
        })
    })
})