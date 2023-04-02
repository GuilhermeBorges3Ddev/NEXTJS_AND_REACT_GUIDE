import React from "react";
/* eslint-disable testing-library/no-node-access */
import { render, screen } from "@testing-library/react";
import { PostCard } from ".";
import { PostCardPropsMock } from "./mock";

const props = PostCardPropsMock;

describe("<PostCard />", () => {
  it("should render PostCard correctly", () => {
    /* 
        If you wanna debug:
            const { debug } = render(<PostCard {...PostCardPropsMock} />);
            debug();
    */
    render(<PostCard {...props} />);
    const headingText = `${props.title} - ${props.id}`;
    const imageElements = screen.getAllByRole("img", { name: props.title });
    const headingElements = screen.getAllByRole("heading", {
      name: headingText,
    });
    const paragraphText = screen.getByText(props.body);
    expect.assertions(3);
    expect(imageElements[0]).toHaveAttribute("src", props.cover);
    expect(headingElements[0]).toBeInTheDocument();
    expect(paragraphText).toBeInTheDocument();
  });
  it("should match a snapshot of the PostCard tested above", () => {
    const { container } = render(<PostCard {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
