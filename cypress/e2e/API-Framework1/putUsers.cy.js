import { expect } from "chai"

describe('PUT call in cypress',() =>{

    it('PUT CALL using JSON', ()=>{

       cy.request({
            method:'PUT',
            url:'https://gorest.co.in/public/v2/users/5967249',
            headers:{
                Authorization: "Bearer 06c7ac383dd846ec15d6e8cc10c2a1da1924848199da24c601c805edfba8868e"              
            },
            body:{
                "email":"ShivamDube12@cricket.com",
                "name":"Shivam Dube"
            }
        }).then((res)=>{
            expect(res.status).to.be.equal(200)
            expect(res.body).has.property("name","Shivam Dube")

        })
    })
})