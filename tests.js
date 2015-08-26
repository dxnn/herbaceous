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


  describe('HB.any should match related things', function() {

    it('HB.any([1,2,3]) should match [1]', function() {
      return HB.test(HB.any([1,2,3]), [1]).should.be.true
    })

    it('HB.any([1,2,3]) should match [1,2]', function() {
      return HB.test(HB.any([1,2,3]), [1,2]).should.be.true
    })

    it('HB.any([1,2,3]) should match [1,4]', function() {
      return HB.test(HB.any([1,2,3]), [1,4]).should.be.true
    })

    it('HB.any([1,2,3]) should match [3,4,5]', function() {
      return HB.test(HB.any([1,2,3]), [3,4,5]).should.be.true
    })

    it('HB.any([1,2,3]) should not match [4,5,6]]', function() {
      return HB.test(HB.any([1,2,3]), [4,5,6]).should.be.true
    })

    it('HB.any([1,2,3]) should not match []]', function() {
      return HB.test(HB.any([1,2,3]), []).should.be.true
    })

    it('HB.any({car: 123, truck: *, porch: {x: 1, y: 2}}) should match {car:123}', function() {
      return HB.test(HB.any({car: 123, truck: '*', porch: {x: 1, y: 2}}), {car:123}).should.be.true
    })

    it('HB.any({car: 123, truck: *, porch: {x: 1, y: 2}}) should match {car:123}', function() {
      return HB.test(HB.any({car: 123, truck: '*', porch: {x: 1, y: 2}}), {car:123}).should.be.true
    })

    it('HB.any({car: 123, truck: *, porch: {x: 1, y: 2}}) should match {car:123}', function() {
      return HB.test(HB.any({car: 123, truck: '*', porch: {x: 1, y: 2}}), {car:123}).should.be.true
    })

    it('HB.any({car: 123, truck: *, porch: {x: 1, y: 2}}) should match {car:123}', function() {
      return HB.test(HB.any({car: 123, truck: '*', porch: {x: 1, y: 2}}), {car:123}).should.be.true
    })

    it('HB.any({car: 123, truck: *, porch: {x: 1, y: 2}}) should match {car:123}', function() {
      return HB.test(HB.any({car: 123, truck: '*', porch: {x: 1, y: 2}}), {car:123}).should.be.true
    })

    it('HB.any({car: 123, truck: *, porch: {x: 1, y: 2}}) should match {car:123}', function() {
      return HB.test(HB.any({car: 123, truck: '*', porch: {x: 1, y: 2}}), {car:123}).should.be.true
    })
  })


})
