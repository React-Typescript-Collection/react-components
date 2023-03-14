import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './index';
import '@testing-library/jest-dom/extend-expect'; // Import the jest-dom extension for matchers

describe('Button', () => {
  it('renders correctly with default props', () => {
    render(<Button />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('button', 'contained', 'default', 'medium');
    expect(screen.getByText('Default')).toBeInTheDocument();
  });

  // it('renders with start and end icons', () => {
  //   render(<Button startIcon="add" endIcon="delete" />);
  //   expect(screen.getByTestId('start-icon')).toBeInTheDocument();
  //   expect(screen.getByTestId('end-icon')).toBeInTheDocument();
  //   const buttonElement = screen.getByRole('button');
  //   expect(buttonElement).toHaveClass('button', 'contained', 'default', 'medium');
  //   expect(screen.getByText('Default')).toBeInTheDocument();
  // });
});
