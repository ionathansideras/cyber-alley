import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "@/components/Button";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
    it("renders button as link if it has href", () => {
        render(<Button href="/test">test</Button>);

        const link = screen.getByRole("link");
        const button = screen.queryByRole("button");

        expect(link).toBeInTheDocument();
        expect(link).toHaveTextContent("test");
        expect(link).toHaveAttribute("href", "/test");

        expect(button).not.toBeInTheDocument();
    });

    it("renders button if it doesn't have href", () => {
        render(<Button>test</Button>);

        const button = screen.queryByRole("button");
        const link = screen.queryByRole("link");

        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent("test");

        expect(link).not.toBeInTheDocument();
    });

    it("if button clicked then check if function has been called", async () => {
        const onClickMock = jest.fn();
        const user = userEvent.setup();

        render(<Button onClick={onClickMock}>test</Button>);

        const button = screen.getByRole("button");

        await user.click(button);

        expect(onClickMock).toHaveBeenCalledTimes(1);
    });
});
