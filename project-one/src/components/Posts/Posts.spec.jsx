/* eslint-disable testing-library/no-node-access */
import React from "react";
import { render, screen } from "@testing-library/react";
import { Posts } from ".";

const props = {
  posts: [
    {
      id: 1,
      title: "title 1",
      body: "body 1",
      cover: "img/img1.png",
    },
    {
      id: 2,
      title: "title 2",
      body: "body 2",
      cover: "img/img2.png",
    },
    {
      id: 3,
      title: "title 3",
      body: "body 3",
      cover: "img/img3.png",
    },
  ],
};

describe("<Posts />", () => {
  it("should render posts", () => {
    render(<Posts {...props} />);
    const allHeadingsRendered = screen.getAllByRole("heading", {
      name: /title/i,
    });
    const allImageTitlesRendered = screen.getAllByRole("img", {
      name: /title/i,
    });
    const allBodyRendered = screen.getAllByText(/body/i);
    expect(allHeadingsRendered).toHaveLength(3);
    expect(allImageTitlesRendered).toHaveLength(3);
    expect(allBodyRendered).toHaveLength(3);
  });
  it("should match with Posts snapshots", () => {
    const { container } = render(<Posts {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
