import React from "react";
import { render } from "@testing-library/react-native";
import { ActorCard } from "./ActorCard";
import { Cast } from "@/infrastructure/interfaces/cast.interface";

describe("ActorCard Component", () => {
  it("renders actor details correctly", () => {
    const mockActor: Cast = {
      id: 1,
      name: "John Doe",
      character: "Hero",
      avatar: "https://example.com/avatar.jpg",
    };

    const { getByText, getByTestId } = render(<ActorCard actor={mockActor} />);

    expect(getByText("John Doe")).toBeTruthy();
    expect(getByText("Hero")).toBeTruthy();
    expect(getByTestId("actor-avatar")).toBeTruthy();
  });
});
