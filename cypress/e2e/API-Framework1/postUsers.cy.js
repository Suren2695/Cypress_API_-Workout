const { expect } = require("chai")

describe('POST CALL', () => {
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
});
