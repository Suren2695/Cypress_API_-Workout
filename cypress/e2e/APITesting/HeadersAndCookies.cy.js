// Get token, Submit Token, Get Order -> please refer the API collections.

describe('Headers and Cookies - API Testing', () =>{

    before('Creating access token', ()=>{

        cy.request({
            method: 'POST',
            url:'https://simple-books-api.glitch.me/api-clients/',
            headers: {
                'Content-Type':'application/json'
            },
            body: {
                clientName:'ABC',
                clientEmail:Math.random().toString(5).substring(2)+'gmail.com'
            }
        }).then((res)=>{
            authToken = res.body.accessToken
        })
    })

})