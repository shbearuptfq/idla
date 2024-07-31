describe("A simple test suite", function() {
    it("should expect '.' to be a string", function() {
        expect('.').toBe('.');
    });

    it("should expect '.' to match the regular expression", function() {
        expect('.').toMatch(/\./);
    });
});
