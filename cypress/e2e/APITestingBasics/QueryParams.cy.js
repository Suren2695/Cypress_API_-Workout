describe('Query Param - API Testing', () =>{

    const queryParam = {page:2}


    it('Using Query parameter',() =>{

// https://reqres.in/api/users?page=2

        cy.request({
            method: 'GET',
            url:'https://reqres.in/api/users',
            qs: queryParam
        })
        .then((res) =>{
            expect(res.status).to.eq(200);
            expect(res.status).equal(200);
            expect(res.body.page).to.eq(2);
            expect(res.body.data).has.length(6);
            expect(res.body.data[0]).have.property('id',7);
            expect(res.body.data[0]).has.property('first_name','Michael');

        })

    })
})