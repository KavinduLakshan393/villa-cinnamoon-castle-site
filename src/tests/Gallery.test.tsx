import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Gallery } from "@/components/Gallery";

describe("Gallery", () => {
  it("filters the collection without discarding photographs", async () => {
    const user = userEvent.setup();
    render(<Gallery />);
    expect(screen.getByText("21 photographs")).toBeInTheDocument();
    await user.click(screen.getByRole("button", { name: "Shared spaces" }));
    expect(screen.getByText("5 photographs")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Shared spaces" })).toHaveAttribute("aria-pressed", "true");
  });
});
