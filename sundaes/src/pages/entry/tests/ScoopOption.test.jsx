import {render, screen} from '@testing-library/react'
import userEvent from "@testing-library/user-event"
import ScoopOption from "../ScoopOption"

test.only(
    'indicate if scoop count is no-int or out of range',
    async () => {
        render(<ScoopOption name="" imagePath="" upadateItemCount={jest.fn()} />)

        const vanillaInput = screen.getByRole('spinbutton')
        userEvent.clear(vanillaInput);
        userEvent.type(vanillaInput, '-1')
        expect(vanillaInput).toHaveClass('is-invalid')

        userEvent.clear(vanillaInput);
        userEvent.type(vanillaInput,'2.5')
        expect(vanillaInput).toHaveClass('is-invalid')

        userEvent.clear(vanillaInput);
        userEvent.type(vanillaInput, '11')
        expect(userEvent).toHaveClass('is-invalid')
    }
)