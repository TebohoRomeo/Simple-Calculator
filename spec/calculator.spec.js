let calculator = require("../src/calculator")

describe("Add function", function() {
    it("Adds two number and returns a sum", function() {
        expect(calculator.add(0,0)).toBe(0)
    })

    it("adds two -numbers and returns the sum", function(){
        expect(calculator.add(-1,-1)).toBe(-2)
    })

    it("adds two positive numbers and return sum.", function(){
        expect(calculator.add(4,5)).toBe(9)
    })

    it("Adds multiple numbers and returns a sum", function(){
        expect(calculator.add(1,2,3,4)).toBe(10);
    })

    
})

describe("Multiply function", function() {
    it("Multiples two number and returns a product", function() {
        expect(calculator.multiply(1,2)).toBe(2)
    })

    it("multiply multiple numbers an returns a product", function(){
        expect(calculator.multiply(1,2,3,4)).toBe(24)
    })
})