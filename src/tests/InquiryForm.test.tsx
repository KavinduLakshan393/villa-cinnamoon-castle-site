import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { InquiryForm } from "@/components/InquiryForm";

describe("InquiryForm", () => {
  it("shows accessible errors for an empty submission", async () => {
    const user = userEvent.setup();
    render(<InquiryForm />);
    await user.click(screen.getByRole("button", { name: /send inquiry/i }));
    expect(screen.getByText("Please review the highlighted fields.")).toBeInTheDocument();
    expect(screen.getByText("Enter your name.")).toBeInTheDocument();
    expect(screen.getByText("Guest count must be between 1 and 10.")).toBeInTheDocument();
    expect(screen.getByText("Please accept the privacy notice.")).toBeInTheDocument();
    expect(screen.getByLabelText(/name/i)).toHaveAttribute("aria-invalid", "true");
  });
});
