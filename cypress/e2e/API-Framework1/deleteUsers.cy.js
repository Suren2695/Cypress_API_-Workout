import { expect } from "chai"

describe(' Delete  API Automation in cypress', () =>{

    let generateRandomEmail = () => {
        const randomString = Math.random().toString(36).substring(2,10)
        const email = randomString+"@photon.com"
        return email
    }

    it('delete users', () =>{

        let emailAddress = generateRandomEmail()
        let payLoad = {
            "name": "Sachin",
            "email": emailAddress,
            "gender": "male",
            "status": "active"
        }

        cy.request({
            method:'POST',
            url:'https://gorest.co.in/public/v2/users',
            headers:{
                Authorization: "Bearer 06c7ac383dd846ec15d6e8cc10c2a1da1924848199da24c601c805edfba8868e"
            },
            body:payLoad        
        }).then((res) =>{
            const userId = res.body.id

            cy.request({
                method:'DELETE',
                url:'https://gorest.co.in/public/v2/users/'+userId,
                headers:{
                    Authorization: "Bearer 06c7ac383dd846ec15d6e8cc10c2a1da1924848199da24c601c805edfba8868e"
                }    
            }).then((res)=>{
                expect(res.status).to.be.equal(204)
            })

//get the value using GET call
            cy.request({
                method:'GET',
                url:'https://gorest.co.in/public/v2/users/'+userId,
                headers:{
                    Authorization: "Bearer 06c7ac383dd846ec15d6e8cc10c2a1da1924848199da24c601c805edfba8868e"
                },
                failOnStatusCode: false
            }).then((res)=>{
                expect(res.status).to.be.equal(404)
            })
        })

    })
})