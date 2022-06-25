import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

const tooltip = () => {
    return (
        <Tooltip id="termsandconditions-popover">
            no ice cream will actually be delivered
        </Tooltip>
    )
};

export default function SummaryForm({ setOrderPhase }) {
    const [tcChecked, setTcChecked] = useState(false);

    const checkboxLabel = (
        <span>
      I agree to
      <OverlayTrigger placement="right" overlay={tooltip}>
        <span style={{ color: "blue" }}>Terms and conditions</span>
      </OverlayTrigger>
    </span>
    );

    const handleSubmit = (ev) => {
        ev.preventDefault();
        setOrderPhase('completed')
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="terms-and-conditions">
                <Form.Check
                    type="checkbox"
                    checked={tcChecked}
                    onChange={(e) => setTcChecked(e.target.checked)}
                    label={checkboxLabel}
                />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!tcChecked}>
                Confirm order
            </Button>
        </Form>
    );
}
