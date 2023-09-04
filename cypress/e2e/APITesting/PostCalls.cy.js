describe('Post Call api testing',() =>{

    //Approach 1

    it('Approach 1 - Hard Coded json object', () =>{

        const requestBody = {
            // YOU NEED TO CHANGE each and everytime email.
                            tourist_name : "surender",
                            tourist_email: "surenden07@gmail.com",
                            tourist_location: "CHENNAI"
                            }
        cy.request({
            method: "POST",
            url: "http://restapi.adequateshop.com/api/Tourist",
            body:requestBody
        })
        .then((res) =>{
            expect(res.status).to.eq(201)
            expect(res.body.tourist_name).to.eq('surender')
            expect(res.body.tourist_email).to.eq('surenden07@gmail.com')
            expect(res.body.tourist_location).to.eq('CHENNAI')
            
        })
    })

    //Approach 2

    it('Approach 2 -  Dynamically generating Json objects',() =>{

        const requestBody = {
            tourist_name : Math.random().toString(5).substring(2),
            tourist_email: Math.random().toString(5).substring(2)+'gmail.com',
            tourist_location: "CHENNAI"
            }
        cy.request({
            method: "POST",
            url: "http://restapi.adequateshop.com/api/Tourist",
            body:requestBody
        })
        .then((res) =>{
            expect(res.status).to.eq(201)
            expect(res.body.tourist_name).to.eq(requestBody.tourist_name)
            expect(res.body.tourist_email).to.eq(requestBody.tourist_email)
            expect(res.body.tourist_location).to.eq(requestBody.tourist_location)
        })
    })

    // Approach 3

    it.only('Approach 3 -  Using Fixture file',() =>{

        cy.fixture('PostCall').then((data) =>{
            const requestBody = data
        
            cy.request({
                method: "POST",
                url: "http://restapi.adequateshop.com/api/Tourist",
                body:requestBody
            })
            .then((res) =>{
                expect(res.status).to.eq(201)
                expect(res.body.tourist_name).to.eq(requestBody.tourist_name)
                expect(res.body.tourist_email).to.eq(requestBody.tourist_email)
                expect(res.body.tourist_location).to.eq(requestBody.tourist_location)

                // verify property
                expect(res.body).has.property('tourist_email',requestBody.tourist_email)
            })
        })    
    })
})