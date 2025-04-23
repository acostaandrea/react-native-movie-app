import React from "react";
import { render } from "@testing-library/react-native";
import MovieCast from "./MovieCast";
import { Cast } from "@/infrastructure/interfaces/cast.interface";

describe("MovieCast Component", () => {
  const mockCast: Cast[] = [
    {
      id: 1,
      name: "Actor One",
      avatar: "/path1.jpg",
      character: "Character One",
    },
    {
      id: 2,
      name: "Actor Two",
      avatar: "/path2.jpg",
      character: "Character Two",
    },
  ];

  it("renders correctly with cast data", () => {
    const { getByText } = render(<MovieCast cast={mockCast} />);

    // Check if the title is rendered
    expect(getByText("Actores")).toBeTruthy();

    // Check if the cast members are rendered
    mockCast.forEach((actor) => {
      expect(getByText(actor.name)).toBeTruthy();
    });
  });

  it("renders empty state when no cast is provided", () => {
    const { queryByText } = render(<MovieCast cast={[]} />);

    // Ensure no actor names are rendered
    expect(queryByText("Actor One")).toBeNull();
    expect(queryByText("Actor Two")).toBeNull();
  });
});
