import { render } from '@testing-library/react';

import SmartSample from './smart-sample';

describe('SmartSample', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SmartSample />);
    expect(baseElement).toBeTruthy();
  });
});
