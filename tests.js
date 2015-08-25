var expect = chai.expect
var should = chai.should()

describe('Integration Tests for the Basic API', function() {
  // this.timeout(7000)

  describe('* should match anything', function() {

    it('* should match an object', function() {
      return HB.test('*', {anything: 123}).should.be.true
    })

    it('* should match a nested object', function() {
      return HB.test('*', {foo: {smile: {donkey: 123}}}).should.be.true
    })

    it('* should match an array', function() {
      return HB.test('*', [1,2,3]).should.be.true
    })

    it('* should match a scalar', function() {
      return HB.test('*', 'asdf').should.be.true
    })
  })

  describe('{prop: "*"} should match anything that has property prop', function() {

    it('{prop: "*"} should match {prop: 123}', function() {
      return HB.test({prop: "*"}, {prop: 123}).should.be.true
    })

    it('{prop: "*"} should match {prop: {porp: 123}}', function() {
      return HB.test({prop: "*"}, {prop: {porp: 123}}).should.be.true
    })

    it('{prop: "*"} should match {prop: 123, porp: 123}', function() {
      return HB.test({prop: "*"}, {prop: 123, porp: 123}).should.be.true
    })

    it('{prop: "*"} should not match {nop: 123}', function() {
      return HB.test({prop: "*"}, {nop: 123}).should.be.false
    })
  })

  describe('{prop: 123} should match anything that has property prop set to 123', function() {

    it('{prop: 123} should match {prop: 123}', function() {
      return HB.test({prop: 123}, {prop: 123}).should.be.true
    })

    it('{prop: 123} should not match {prop: {porp: 123}}', function() {
      return HB.test({prop: 123}, {prop: {porp: 123}}).should.be.false
    })

    it('{prop: 123} should match {prop: 123, porp: 123}', function() {
      return HB.test({prop: 123}, {prop: 123, porp: 123}).should.be.true
    })

    it('{prop: 123} should not match {nop: 123}', function() {
      return HB.test({prop: 123}, {nop: 123}).should.be.false
    })
  })

  // describe('{prop: "*"} should match anything that has that property', function() {

  //   it('{prop: "*"} should match {prop: 123}', function() {
  //     return HB.test('{prop: "*"}', {prop: 123}).should.be.true
  //   })

  //   it('{prop: "*"} should match {prop: {porp: 123}}', function() {
  //     return HB.test('{prop: "*"}', {prop: {porp: 123}}).should.be.true
  //   })

  //   it('{prop: "*"} should match {prop: 123, porp: 123}', function() {
  //     return HB.test('{prop: "*"}', {prop: 123, porp: 123}).should.be.true
  //   })

  //   it('{prop: "*"} should not match {nop: 123}', function() {
  //     return HB.test('{prop: "*"}', {nop: 123}).should.be.true
  //   })
  // })


  // describe('{prop: "*"} should match anything that has that property', function() {

  //   it('{prop: "*"} should match {prop: 123}', function() {
  //     return HB.test('{prop: "*"}', {prop: 123}).should.be.true
  //   })

  //   it('{prop: "*"} should match {prop: {porp: 123}}', function() {
  //     return HB.test('{prop: "*"}', {prop: {porp: 123}}).should.be.true
  //   })

  //   it('{prop: "*"} should match {prop: 123, porp: 123}', function() {
  //     return HB.test('{prop: "*"}', {prop: 123, porp: 123}).should.be.true
  //   })

  //   it('{prop: "*"} should not match {nop: 123}', function() {
  //     return HB.test('{prop: "*"}', {nop: 123}).should.be.true
  //   })
  // })







  // describe('Add an anonymous mode private message', function() {
  //   var prom

  //   it('should add an anonymous private message', function(done) {
  //     var userprom = EB.Users.addAnonymousUser()
  //     userprom.then(function(userRecord) {
  //       recipient = userRecord.username
  //       prom = EB.postAnonymousPrivateMessage('Hello World', recipient)
  //     }).then(done)
  //   })

  //   it('should have some content', function() {
  //     return prom.should.eventually.have.deep.property('payload.content')
  //   })

  //   it('should have type encryptedpuff', function() {
  //     return prom.should.eventually.have.deep.property('payload.type', 'encryptedpuff')
  //   })

  //   it('should have recipient as a key', function() {
  //     return prom.should.eventually.have.property('keys').and.property(recipient + ':1') // THINK: hardcoded capa
  //   })

  //   it('should not have our username as a key', function() {
  //     return prom.should.eventually.have.property('keys').and.not.property(username + ':1') // THINK: hardcoded capa
  //   })

  //   it('should not be from our username', function() {
  //     return prom.should.eventually.have.property('username').and.not.contain(username)
  //   })

  //   it('should not have our username in the routes', function() {
  //     return prom.should.eventually.have.property('routes').and.not.contain(username)
  //   })

  //   it.skip('should have our username as the letter', function() {
  //     // return prom.should.eventually.have.property('routes').and.not.contain(username)
  //   })

  // })

})
