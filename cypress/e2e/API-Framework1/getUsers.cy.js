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
            //expect(Response.body.id).to.eq(5816709) //Positive case        
        })
    })

    it('Get Users - Invalide user', ()=>{
        cy.request({
            method:'GET',
            url:'https://gorest.co.in/public/v2/users/14587',
            Headers:{
                Authorization:'Bearer 5da4283251f9409d5f5e6d210978e278a4a0df1be7c5f7b7662f7d3b5e6f2f8b'
            },
            failOnStatusCode: false
        })
        .then((Response)=>{
            cy.log(JSON.stringify(Response))
            expect(Response.status).to.eq(404) // by default it will check 2XX and 3XX status code
           // expect(Response.body.id).to.eq(5816709) //Positive case        
        })
    })

    // Dynamic value in the url :

    it ('Get User - Dynamically user id and add  as the url endpoint', ()=>{
        cy.request({
            method: 'GET',
            url:'https://gorest.co.in/public/v2/users',
        })
        .then((res) =>{

            //'response.body' contains the array of users
            const fnUrl = res.body[0].id;

            // URL by appending the first user's ID
            const dynamicUrl = `https://gorest.co.in/public/v2/users/${fnUrl}`

            //Now we use our dynamicUrl as the URL
        cy.request({
            method:'GET',
            url: dynamicUrl,
            Headers:{
                Authorization:'Bearer 5da4283251f9409d5f5e6d210978e278a4a0df1be7c5f7b7662f7d3b5e6f2f8b'
            }
        }).then((res) =>{
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(200)
            expect(res.body.id).to.eq(5816709)
        })

        })
    })
})