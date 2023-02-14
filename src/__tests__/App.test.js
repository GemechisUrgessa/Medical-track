import React from 'react';
import { render } from '@testing-library/react';
import NotFound from '../pages/404';
import { MemoryRouter } from 'react-router-dom';
import About from '../pages/about';
import Business from '../pages/business';
import FaqPage from '../pages/faq-page';
import Fill from '../pages/FillInfo';
import Landing from '../pages/landing';
import Professionals from '../pages/professionals';

describe("page Not found", () => {
  it("renders", () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );
  });
});

describe("about page", () => {
  it("renders", () => {
    render(
      <MemoryRouter>
        <About />
      </MemoryRouter>
    );
  });
});

describe("business page", () => {
  it("renders", () => {
    render(
      <MemoryRouter>
        <Business />
      </MemoryRouter>
    );
  });
});

describe("Faqs page", () => {
  it("renders", () => {
    render(
      <MemoryRouter>
        <FaqPage />
      </MemoryRouter>
    );
  });
});

describe("fill info", () => {
  it("renders", () => {
    render(
      <MemoryRouter>
        <Fill />
      </MemoryRouter>
    );
  });
});

describe("landing Page", () => {
  it("renders", () => {
    render(
      <MemoryRouter>
        <Landing />
      </MemoryRouter>
    );
  });
});

describe("professional page", () => {
  it("renders", () => {
    render(
      <MemoryRouter>
        <Professionals />
      </MemoryRouter>
    );
  });
});
