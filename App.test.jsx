import { describe, expect, it } from 'vitest';
import App from './src/App';
import { render, screen } from '@testing-library/react';

describe('App Component Test', () => {
    it('should contains a <main> html element', () => {
        // const { getByRole } = render(<App/>)
        render(<App />);
        expect(screen.getByRole('main')).toBeInTheDocument();
        screen.debug(screen.getByRole('heading', {level: 1}))
    });
});