describe("AutoComplete Function", function () {
    describe("Launch Test", function () {
        it("Should be Undefined", function () {
            expect(getCatData(autocomplete)).toBe(undefined)
        });
    });
});

describe("Clue Reveals", function() {
    describe("Second Clue Reveal", function() {
        it("Should be Number", function() {

            var testElement = document.getElementById("clue2")

             expect(clueButtonReveals(params)).toBeString("clue2");
             expect((testElement).html).toBeNumber();
        })
    })
})



