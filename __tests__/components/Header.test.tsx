import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "@/components/Header";
import styles from "@/styles/Header.module.css";

describe("Header", () => {
    it("renders the heading element for landing page design", () => {
        render(<Header forLandingPage />);

        const heading = screen.getByRole("banner");
        const buttonStart = screen.queryByRole("link", { name: "start" });
        const buttonProfile = screen.queryByRole("link", { name: "profile" });
        const buttonCreateEvent = screen.queryByRole("link", {
            name: "create event",
        });

        expect(heading).toBeInTheDocument();
        expect(heading).toHaveClass(styles.forLandingPage);

        expect(buttonStart).toBeInTheDocument();

        expect(buttonProfile).not.toBeInTheDocument();
        expect(buttonCreateEvent).not.toBeInTheDocument();
    });

    it("renders the heading element NOT landing page design", () => {
        render(<Header />);

        const heading = screen.getByRole("banner");
        const buttonStart = screen.queryByRole("link", { name: "start" });
        const buttonProfile = screen.queryByRole("link", { name: "profile" });
        const buttonCreateEvent = screen.queryByRole("link", {
            name: "create event",
        });

        expect(heading).toBeInTheDocument();
        expect(heading).not.toHaveClass(styles.forLandingPage);
        expect(heading).toHaveClass(styles.headerFilled);

        expect(buttonStart).not.toBeInTheDocument();

        expect(buttonProfile).toBeInTheDocument();
        expect(buttonCreateEvent).toBeInTheDocument();
    });
});
