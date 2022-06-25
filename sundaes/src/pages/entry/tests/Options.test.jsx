import {render, screen} from "../../../test-utils/testing-library-utils"

import Options from "../Options";
import {OrderDetailsProvider} from "../../../context/OrderDetails";

test("Displays image for each scoop from the server", async () => {
    render(<Options optionType="scoops"/>)
    const scoopImages = await screen.findAllByRole('img', {
        name: /scoop$/i
    })
    expect(scoopImages).toHaveLength(4);
    const altText = scoopImages.map(element => element.alt)
    expect(altText).toEqual([
        "Mint chip scoop",
        "Vanilla scoop",
        "Chocolate scoop",
        "Salted caramel scoop"
    ])
})

test("Displays image for each topping from the server", async () => {
    render(<Options optionType="toppings"/>, {
        wrapper: OrderDetailsProvider
    })
    const scoopImages = await screen.findAllByRole('img', {
        name: /topping$/i
    })
    expect(scoopImages).toHaveLength(6);
    const altText = scoopImages.map(element => element.alt)
    expect(altText).toEqual([
        "Mochi topping",
        "Cherries topping",
        "M&Ms topping",
        "Hot fudge topping",
        "Peanut butter cups topping",
        "Gummi bears topping"
    ])
})
