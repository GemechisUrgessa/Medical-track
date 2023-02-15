import React from 'react';
import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import Business from '../pages/business';
import FaqPage from '../pages/faq-page';
import Professionals from '../pages/professionals';



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




describe("professional page", () => {
  it("renders", () => {
    render(
      <MemoryRouter>
        <Professionals />
      </MemoryRouter>
    );
  });
});
