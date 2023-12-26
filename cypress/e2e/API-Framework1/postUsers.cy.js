import payload from '../../config/payload.json'

const { expect } = require("chai")

describe('POST CALL', () => {
// Normal Hardcoded value
  it('POST CALL - Json', () => {
    cy.request({
      method: 'POST',
      url: 'https://gorest.co.in/public/v2/users',
      headers: {
        Authorization: 'Bearer 272ba2170767a4eeed41af71d0003069809b427f9aed7f320e5875591e14a45d', // Unique
      },
      body: {
        "name": "Virat Kohli",
        "email": "VK188@cricketcap.com",
        "gender": "Male",
        "status": "active"
      },
    }).then((res) => {
      expect(res.status).to.eq(201);
      expect(res.body).to.have.property("name", "Virat Kohli"); // Case-sensitive
      expect(res.body.id).to.not.be.null;
    });
  });

  // create a function from email 
  
  function generateRandomEmail() {
    const randomString = Math.random().toString(36).substring(2,10)
    const email = randomString+"@photon.com"
    return email
} 
  
    it('POST CALL - Json using method',() =>{
        const randoEmail = generateRandomEmail()
        const payLoad = {          //adding value as a payload.
            "name": "Rohit sharma",
            "email": randoEmail,
            "gender": "male",
            "status": "active"
        }
        cy.log(" *******EMAIL******"+randoEmail)
        cy.request({
            method: "POST",
            url: 'https://gorest.co.in/public/v2/users',
            headers:{
                Authorization: 'Bearer 272ba2170767a4eeed41af71d0003069809b427f9aed7f320e5875591e14a45d',
            },
            body:payLoad
        }).then((res)=>{
            expect(res.status).to.eq(201);
            expect(res.body).to.have.property("name", "Rohit sharma"); // Case-sensitive
            //cy.log("***** LOG 1**********")
            expect(res.body).to.have.property("gender", "male");
            expect(res.body).to.have.property("status", "active");
            expect(res.body.id).to.not.be.null;
        })
    })

    //Using Fixtures - POST

    it('POST CALL - using Fixtures',() =>{
        const randoEmail = generateRandomEmail()
    
        cy.fixture('usersPostFramework').then((resObj) =>{
            resObj.email = randoEmail    // or direct assing to generateRandomEmail()
            cy.log(" *******EMAIL******"+randoEmail)

            cy.request({
                method: "POST",
                url: 'https://gorest.co.in/public/v2/users',
                headers:{
                    Authorization: 'Bearer 272ba2170767a4eeed41af71d0003069809b427f9aed7f320e5875591e14a45d',
                },
                body: resObj
            }).then((res)=>{
                expect(res.status).to.eq(201);
                expect(res.body).to.have.property("name", "Mahi Singh Dhoni"); // Case-sensitive
                //cy.log("***** LOG 1**********")
                expect(res.body).to.have.property("email",randoEmail)
                expect(res.body).to.have.property("gender", "male");
                expect(res.body).to.have.property("status", "active");
                expect(res.body.id).to.not.be.null;
            })
        })
    })

    //

    it.only('POST CALL - using config JSOn (',() =>{
        
            const randoEmail= payload.email = generateRandomEmail()    // or direct assing to generateRandomEmail()
            cy.request({
                method: "POST",
                url: 'https://gorest.co.in/public/v2/users',
                headers:{
                    Authorization: 'Bearer 272ba2170767a4eeed41af71d0003069809b427f9aed7f320e5875591e14a45d',
                },
                body: payload
            }).then((res)=>{
                expect(res.status).to.eq(201);
                expect(res.body).to.have.property("name", "SK"); // Case-sensitive
                //cy.log("***** LOG 1**********")
                expect(res.body).to.have.property("email",randoEmail)
                expect(res.body).to.have.property("gender", "male");
                expect(res.body).to.have.property("status", "active");
                expect(res.body.id).to.not.be.null;
            })
    })
});
