import { describe, expect, it, vi } from "vitest";
import ProductCard from "./ProductCard";
import {render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("ProductCart Component", () => {
    const testProduct = {
        id: 'testId',
        name: 'Test Product',
        description: 'Test product description',
        handleAddItemToCart: vi.fn((id) => id),
    };

    function setup(jsx){
        return{
            user: userEvent.setup(),
            ...render(jsx)
        }
    }
    it('should include h2 containing "Test Product"', () => {
        render(
            <ProductCard product={testProduct}/>
        );
        expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
        expect(screen.getByRole('heading')).toHaveTextContent(testProduct.name)
    });

    // it('should button fires callback', async () => {
    //     const {user} = setup(<ProductCard product={testProduct} handleAddItemToCart={testProduct.handleAddItemToCart}/>)
    //     await user.click(screen.getByRole('button'))
    //     expect(testProduct.handleAddItemToCart).toHaveBeenCalled();
    //     vi.clearAllMocks()
    // });
});