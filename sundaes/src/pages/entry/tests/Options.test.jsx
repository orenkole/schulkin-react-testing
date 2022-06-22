import {render, screen} from "../../../test-utils/testing-library-utils"

import Options from "../Options";
import {OrderDetailsProvider} from "../../../context/OrderDetails";

test("Displays image for each scoop from the server", async () => {
    render(<Options optionType="scoops"/>)
    const scoopImages = await screen.findAllByRole('img', {
        name: /scoop$/i
    })
    expect(scoopImages).toHaveLength(2);
    const altText = scoopImages.map(element => element.alt)
    expect(altText).toEqual(['Mint chip scoop', 'Vanilla scoop'])
})

test("Displays image for each topping from the server", async () => {
    render(<Options optionType="toppings"/>, {
        wrapper: OrderDetailsProvider
    })
    const scoopImages = await screen.findAllByRole('img', {
        name: /topping$/i
    })
    expect(scoopImages).toHaveLength(3);
    const altText = scoopImages.map(element => element.alt)
    expect(altText).toEqual(['M&Ms topping', 'Hot fudge topping', 'Peanut butter cups topping'])
})
