import React from "react";
import { render, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import HelloDefault from '../component/hello';


it('render with a name', async () => {
  const {container} = render(<HelloDefault name="John"/>);
  expect(container).toHaveTextContent("Hello John");
});