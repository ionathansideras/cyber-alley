import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "@/components/Header";
import styles from "@/styles/Header.module.css";
import userEvent from "@testing-library/user-event";

describe("Header", () => {
    it("renders the header element for landing page design", () => {
        render(<Header forLandingPage />);

        const header = screen.getByRole("banner");
        const buttonStart = screen.queryByRole("link", { name: "start" });
        const buttonProfile = screen.queryByRole("link", { name: "profile" });
        const buttonCreateEvent = screen.queryByRole("link", {
            name: "create event",
        });

        expect(header).toBeInTheDocument();
        expect(header).toHaveClass(styles.forLandingPage);

        expect(buttonStart).toBeInTheDocument();

        expect(buttonProfile).not.toBeInTheDocument();
        expect(buttonCreateEvent).not.toBeInTheDocument();
    });

    it("renders the header element NOT landing page design", () => {
        render(<Header />);

        const header = screen.getByRole("banner");
        const buttonStart = screen.queryByRole("link", { name: "start" });
        const buttonProfile = screen.queryByRole("link", { name: "profile" });
        const buttonCreateEvent = screen.queryByRole("link", {
            name: "create event",
        });

        expect(header).toBeInTheDocument();
        expect(header).not.toHaveClass(styles.forLandingPage);
        expect(header).toHaveClass(styles.headerFilled);

        expect(buttonStart).not.toBeInTheDocument();

        expect(buttonProfile).toBeInTheDocument();
        expect(buttonCreateEvent).toBeInTheDocument();
    });

    it("adds filled class to toggle when the state open is changing", async () => {
        const user = userEvent.setup();

        render(<Header forLandingPage />);

        const header = screen.getByRole("banner");
        const hamBurgerButton = screen.getByTestId("hamburger-button");

        expect(header).not.toHaveClass(styles.headerFilled);

        await user.click(hamBurgerButton);

        expect(header).toHaveClass(styles.headerFilled);

        await user.click(hamBurgerButton);

        expect(header).not.toHaveClass(styles.headerFilled);
    });

    it("if we scroll down the header will hidden", async () => {
        render(<Header />);

        const header = screen.getByRole("banner");

        expect(header).not.toHaveClass(styles.headerHidden);

        window.scrollY = 400;

        fireEvent.scroll(window);

        expect(header).toHaveClass(styles.headerHidden);

        window.scrollY = 0;

        fireEvent.scroll(window);

        expect(header).not.toHaveClass(styles.headerHidden);
    });

    it("if we scroll down and its for landing page the header will be filled as well", async () => {
        render(<Header forLandingPage />);

        const header = screen.getByRole("banner");

        expect(header).not.toHaveClass(styles.headerHidden);
        expect(header).not.toHaveClass(styles.headerFilled);

        window.scrollY = 400;

        fireEvent.scroll(window);

        expect(header).toHaveClass(styles.headerHidden);
        expect(header).toHaveClass(styles.headerFilled);

        window.scrollY = 0;

        fireEvent.scroll(window);

        expect(header).not.toHaveClass(styles.headerHidden);
        expect(header).not.toHaveClass(styles.headerFilled);
    });
});
