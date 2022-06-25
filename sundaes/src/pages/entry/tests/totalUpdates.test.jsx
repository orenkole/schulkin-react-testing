import userEvent from "@testing-library/user-event";
import Options from "../Options";
import {OrderDetailsProvider} from "../../../context/OrderDetails";
import {render, screen} from "../../../test-utils/testing-library-utils";
import {waitFor} from "@testing-library/react";
import OrderEntry from "../OrderEntry";

test(
    'Update scoop subtotal when scoops change',
    async () => {
        render(<Options optionType="scoops"/>, {
            wrapper: OrderDetailsProvider
        })
        // make sure total starts out $0.00
        const scoopsSubtotal = screen.getByText('Scoops total: $', {exact: false})
        expect(scoopsSubtotal).toHaveTextContent('0.00')
        // update vanilla scoops to 1 and check the subtotal
        const vanillaInput = await screen.findByRole('spinbutton', {name: 'Vanilla'})
        userEvent.clear(vanillaInput);
        userEvent.type(vanillaInput, '1')
        // Vanilla scoop is $2.00 for a piece
        expect(scoopsSubtotal).toHaveTextContent('2.00')
    }
)

test('update toppings subtotal when toppings change', async () => {
    //render parent component
    render(<Options optionType="toppings"/>)
    await waitFor(async () => {
        const toppingsTotal = screen.getByText('Toppings total: $', {exact: false})
        expect(toppingsTotal).toHaveTextContent('0.00')
        const cherriesCheckbox = await screen.findByRole('checkbox', {
            name: 'Mochi'
        })
        userEvent.click(cherriesCheckbox);
        expect(toppingsTotal).toHaveTextContent('1.50')

        const hotFudgeCheckbox = screen.getByRole('checkbox', {
            name: 'Hot fudge'
        })
        userEvent.click(hotFudgeCheckbox);
        expect(toppingsTotal).toHaveTextContent('3.00')
        userEvent.click(hotFudgeCheckbox)
        expect(toppingsTotal).toHaveTextContent('1.50')
    })
})

describe('grand total', function () {
    test('grand total starts at $0.00', () => {
        render(<OrderEntry/>)
        const grandTotal = screen.getByRole('heading', {
            name: /grand total: \$/i
        })
        expect(grandTotal).toHaveTextContent('0.00')
    })
    test(
        'grand total updates properly if scoop is added first',
        async () => {
            render(<OrderEntry/>)
            const grandTotal = screen.getByRole('heading', {
                name: /grand total: \$/i,
            })

            const vanillaInput = await screen.findByRole('spinbutton', {
                name: 'Vanilla'
            })
            userEvent.clear(vanillaInput);
            userEvent.type(vanillaInput, '2')
            expect(grandTotal).toHaveTextContent('4.00')

            const cherriesCheckbox = await screen.findByRole('checkbox', {
                name: 'Cherries'
            })
            userEvent.clear(cherriesCheckbox);
            expect(grandTotal).toHaveTextContent('5.50')
        }
    )
    test('grand total updates properly if scoop is added first', () => {

    })
    test('grand total updates properly if item is removed', () => {

    })
});
