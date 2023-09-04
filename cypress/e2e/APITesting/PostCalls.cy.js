describe('Post Call api testing',() =>{

    //Approach 1
    
    it('Approach 1 - Hard Coded json object', () =>{

        const requestBody = {
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
})