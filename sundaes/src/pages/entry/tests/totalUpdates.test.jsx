import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Options from "../Options";

test(
    'Update scoop subtotal when scoops change',
    async () => {
        render(<Options optionType="scoops"/>)
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
