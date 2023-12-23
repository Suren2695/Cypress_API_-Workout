// Get token, Submit Token, Get Order -> please refer the API collections.

//URL is not working expired api - Verify this as sample

describe('Headers and Cookies - API Testing', () =>{

    let authToken = null;

    before('Creating access token', ()=>{

        cy.request({
            method: 'POST',
            url:'https://simple-books-api.glitch.me/api-clients/',
             headers: {
                "content-type": "application/json; charset=utf-8",
             },
            body: {
                clientName:'ABC',
                clientEmail:Math.random().toString(5).substring(2)+'gmail.com' // random email generator
            }
        }).then((res)=>{
            authToken = res.body.accessToken;
        })
    })

    before('Creating New Order', ()=>{

        cy.request({
            method: 'POST',
            url:'https://simple-books-api.glitch.me/orders/',
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Bearer' + authToken
            },
            body: {
                bookId:1,
                customerName:"Zack"
            }
        }).then((res)=>{
            expect(res.status).to.eq(201);
            expect(res.body.created).to.eq(true);
        })
    })

    it('Get an Order', ()=>{

        cy.request({
            method:'GET',
            url:'https://simple-books-api.glitch.me/orders/',
            headers: {
                'Content-Type':'application/json',
                'Authorization':'Bearer' + authToken
            },
            cookies:{
                'cookiesName':'myCookies'
            }

        })
        .then((res) =>{
            expect(res.status).to.eq(200);
        })

    })

})