describe("Euclid Algorithm", function() {
    it("when checking 81 and 63", function() {
        var result;
        result = gcd(81,63);
        expect(result).toBe(9);
    });
});