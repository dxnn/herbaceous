var expect = chai.expect
var should = chai.should()

describe('Integration Tests for the Basic API', function() {
  // this.timeout(7000)

  describe('anything should match itself', function() {

    it('1 should match 1', function() {
      return HB.test(1, 1).should.be.true
    })

    it('"lala" should match "lala"', function() {
      return HB.test("lala", "lala").should.be.true
    })

    it('{foo: 123} should match {foo: 123}', function() {
      return HB.test({foo: 123}, {foo: 123}).should.be.true
    })

    it('[1,2,3] should match [1,2,3]', function() {
      return HB.test([1,2,3], [1,2,3]).should.be.true
    })
  })

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

  describe('[1,2,3] should match any array with values 1, 2, and 3', function() {

    it('[1,2,3] should match [1,2,3]', function() {
      return HB.test([1,2,3], [1,2,3]).should.be.true
    })

    it('[1,2,3] should not match [1,2,4]', function() {
      return HB.test([1,2,3], [1,2,4]).should.be.false
    })

    it('[1,2,3] should match [1,2,4,3]', function() {
      return HB.test([1,2,3], [1,2,4,3]).should.be.true
    })

    it('[1,2,3] should not match [1,2]', function() {
      return HB.test([1,2,3], [1,2]).should.be.false
    })

    it('[1] should not match 1', function() {
      return HB.test([1], 1).should.be.false
    })

    it('[1] should not match {x:1}', function() {
      return HB.test([1], {x:1}).should.be.false
    })

    it('[1] should not match "1"', function() {
      return HB.test([1], "1").should.be.false
    })

    it('[1] should not match false', function() {
      return HB.test([1], false).should.be.false
    })

    it('[1] should not match null', function() {
      return HB.test([1], null).should.be.false
    })
  })


  describe('HB.length should match arrays by length', function() {

    it('HB.length(3) should match any array with a length of three or more', function() {
      var result = HB.test({prop: HB.length(3)}, {prop: [1,2,3]}).should.be.true
                && HB.test({prop: HB.length(3)}, {prop: [1,2,3,4]}).should.be.true
                && HB.test({prop: HB.length(3)}, {prop: [1,2]}).should.be.false
      return result
    })

    it('HB.length.exactly(3) should match any array with a length of exactly three', function() {
      var result = HB.test({prop: HB.length.exactly(3)}, {prop: [1,2,3]}).should.be.true
                && HB.test({prop: HB.length.exactly(3)}, {prop: [1,2,3,4]}).should.be.false
                && HB.test({prop: HB.length.exactly(3)}, {prop: [1,2]}).should.be.false
      return result
    })

    it('HB.length.less_than(3) should match any array with a length of less than three', function() {
      var result = HB.test({prop: HB.length.less_than(3)}, {prop: [1,2,3]}).should.be.false
                && HB.test({prop: HB.length.less_than(3)}, {prop: [1,2,3,4]}).should.be.false
                && HB.test({prop: HB.length.less_than(3)}, {prop: [1,2]}).should.be.true
                && HB.test({prop: HB.length.less_than(3)}, {prop: [1]}).should.be.true
      return result
    })
  })







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
