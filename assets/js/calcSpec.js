describe("AutoComplete Function", function () {
    describe("Launch Test", function () {

        //arrange 
        beforeEach(function () {
            spyOn(window, 'getCatData');
        });

        //act
        getCatData(autocomplete);


        //arrange
        it("Should be called", function () {
            expect(window.getCatData).toHaveBeenCalled();
        });
    });
});

describe("Math Functions", () => {
    it("Gets the Sum of 2 Numbers", () => {
        //arrange
        const num1 = 2;
        const num2 = 3;

        //act
        const result = add(num1, num2);

        //arrange
        expect(result).toBe(5);
    });

    it("Returns subtracted value", () => {
        //arrange
        const num1 = 2;
        const num2 = 3;

        //act
        const result = minus(num1, num2);

        //arrange
        expect(result).toBe(-1);
    });

})



