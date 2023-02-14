import React from 'react';
import { render, screen } from '@testing-library/react';
import Landing from '../pages/landing';
import NotFound from '../pages/404';
import { Route, Router, Routes, MemoryRouter, BrowserRouter } from 'react-router-dom';

import { createMemoryHistory } from 'history';
// const history = createMemoryHistory();
const history = createMemoryHistory({
  initialEntries: ['/']
});

// import { Router, Route,  } from 'react-router-dom';





// test('renders landing page', () => {
  //   render(
    //     <MemoryRouter initialEntries={['/']}>
    //       <Route path="/" component={NotFound} />
//     </MemoryRouter>
//   );
//   const linkElement = screen.getByTestId('test');
//   expect(linkElement).toHaveTextContent(/404/i);
// });
// unit test to render Landing page and see if Apply is rendered
// where the Apply is the text with arial-testId of test
// the page is render inside </BrowserRouter> </Routes> <Route path="/" element={<Landing />} />
// and resolve TypeError: cannot read property of undefined(reading 'pathname')  


test('renders landing page', () => {
  render(
    <Router history={history}>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
  const linkElement = screen.getByTestId('test');
  expect(linkElement).toHaveTextContent(/Apply/i);
});

// resolve TypeError: cannot read property of undefined(reading 'pathname')  at history


// unit test to render NotFound page and see if 404 is rendered
// where the 404 is the text with arial-testId of test
// the page is render inside </BrowserRouter> </Routes> <Route path="*" element={<NotFound />} />
// test('renders 404 page', () => {
//   render(
//     <Router history={history}>
//       <Routes>
//         <Route path="*" element={<NotFound />} />
//       </Routes>
//     </Router>
//   );
//   const linkElement = screen.getByTestId('test');
//   expect(linkElement).toHaveTextContent(/404/i);
// }
// );
      

