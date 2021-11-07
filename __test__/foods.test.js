const shoppingList = require("../function/foods")

test("Shopping List has contain a tomato", () => {
    expect(shoppingList).toContain("tomato")
    expect(new Set(shoppingList)).toContain("tomato")
})