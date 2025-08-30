import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HamburgerMenu from "@/components/HamburgerMenu";
import styles from "@/styles/HamburgerMenu.module.css";
import userEvent from "@testing-library/user-event";

describe("hamburger menu", () => {
    it("hamburger menu does not have nav open by when its not open", () => {
        const setOpen = jest.fn();
        render(<HamburgerMenu open={false} setOpen={setOpen} />);

        const hamBurgerButton = screen.getByTestId("hamburger-button");
        const nav = screen.queryByRole("navigation");

        expect(hamBurgerButton).toBeInTheDocument();
        expect(hamBurgerButton).not.toHaveClass(styles.open);
        expect(nav).not.toBeInTheDocument();
    });

    it("hamburger menu has nav open by when its not open", () => {
        render(<HamburgerMenu open={true} setOpen={() => {}} />);

        const hamBurgerButton = screen.getByTestId("hamburger-button");
        const nav = screen.queryByRole("navigation");

        expect(hamBurgerButton).toBeInTheDocument();
        expect(hamBurgerButton).toHaveClass(styles.open);
        expect(nav).toBeInTheDocument();
    });

    it("hamburger menu has all the links when its open", () => {
        render(<HamburgerMenu open={true} setOpen={() => {}} />);

        const buttonHome = screen.queryByRole("link", {
            name: "home",
        });
        const buttonEvents = screen.queryByRole("link", {
            name: "events",
        });
        const buttonCreateEvent = screen.queryByRole("link", {
            name: "create event",
        });
        const buttonProfile = screen.queryByRole("link", { name: "profile" });

        expect(buttonHome).toBeInTheDocument();
        expect(buttonEvents).toBeInTheDocument();
        expect(buttonCreateEvent).toBeInTheDocument();
        expect(buttonProfile).toBeInTheDocument();
    });

    it("hamburger menu calls setOpen when its clicked", async () => {
        const setOpen = jest.fn();
        const user = userEvent.setup();

        render(<HamburgerMenu open={true} setOpen={setOpen} />);

        const hamBurgerButton = screen.getByTestId("hamburger-button");

        await user.click(hamBurgerButton);

        expect(setOpen).toHaveBeenCalledTimes(1);
    });

    it("closes when clicking outside", async () => {
        const user = userEvent.setup();
        const setOpen = jest.fn();

        render(<HamburgerMenu open={true} setOpen={setOpen} />);

        await user.click(document.body);

        expect(setOpen).toHaveBeenCalledTimes(1);
        expect(setOpen).toHaveBeenCalledWith(false);
    });

    it("closes when clicking a menu link", async () => {
        const user = userEvent.setup();
        const setOpen = jest.fn();

        render(<HamburgerMenu open={true} setOpen={setOpen} />);

        await user.click(screen.getByRole("link", { name: /home/i }));
        expect(setOpen).toHaveBeenCalledWith(false);
    });
});
