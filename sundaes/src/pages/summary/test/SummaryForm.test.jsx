import {queryByText, render, screen} from "@testing-library/react";
import SummaryForm from "../summaryForm";
import userEvent from "@testing-library/user-event";

test("Initial conditions", () => {
    render(<SummaryForm/>)
    const checkbox = screen.getByRole('checkbox', {
        name: /terms and conditions/i,
    })
    expect(checkbox).not.toBeChecked();
    const confirmButton = screen.getByRole('button', {
        name: 'confirm order'
    })
    expect(confirmButton).toBeDisabled();
})

test("Checkbox disables button on first click and enables on second", () => {
    render(<SummaryForm/>)
    const checkbox = screen.getByRole('checkbox', {
        name: /terms and conditions/i,
    })
    const confirmButton = screen.getByRole('button', {
        name: 'confirm order'
    })
    userEvent.click(checkbox)
    expect(confirmButton).toBeEnabled();
    userEvent.click(checkbox)
    expect(confirmButton).toBeDisabled();
})

test("popover responds to hover", () => {
    render(<SummaryForm/>)
    // popover start out hidden
    const nullPopover = screen.queryByText('/no ice cream will actually be delivered/i')
    expect(nullPopover).not.toBeInTheDocument();
    // popover appears upon mouseover of checkbox label
    const termsAndConditions = screen.getByText(/terms and conditions/i)
    userEvent.hover(termsAndConditions);
    const popover = screen.getByText('/no ice cream will actually be delivered/i')
    expect(popover).toBeInTheDocument();
    // popover disappears when we mouse out
    userEvent.unhover(termsAndConditions);
    const nullPopoverAgain = screen.queryByText('/no ice cream will actually be delivered/i')
    expect(nullPopoverAgain).not.toBeInTheDocument();
})
