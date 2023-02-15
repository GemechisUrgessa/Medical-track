import { render } from '@testing-library/react';
import NotFound from '../pages/404';

describe("page Not found", () => {
  it("renders", () => {
    render(
     
        <NotFound />
   
    );
  });
});