import {render, screen, fireEvent} from "@testing-library/react";
import SummaryForm from "../summaryForm";

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
    fireEvent.click(checkbox)
    expect(confirmButton).toBeEnabled();
    fireEvent.click(checkbox)
    expect(confirmButton).toBeDisabled();
})
