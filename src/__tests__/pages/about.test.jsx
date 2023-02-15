import About from '../../pages/about';
import { render } from '@testing-library/react';

describe("about page", () => {
  it("renders", () => {
    render(
    //   <MemoryRouter>
        <About />
    //   </MemoryRouter>
    );
    
  });
});
