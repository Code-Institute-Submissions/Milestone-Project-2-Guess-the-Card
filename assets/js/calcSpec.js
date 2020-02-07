describe("fetchCardList Function", function () {
    describe("Launch Test", function () {

        //arrange 
        beforeAll(function () {
            spyOn(window,'fetchCardList');
        });

        //act
        fetchCardList(autocomplete);


        //arrange
        fit("Should be called", function () {
            expect(window.fetchCardList).toHaveBeenCalled();
        });
    });
});
//Unable to get the above to work in time before submitting. Will need to be addressed.

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



