import { useState } from "react";

export default function TacoBuilder() {
    const [tacoOptions, setTacoOptions] = useState(['corn tortilla']);

    function addOption(option) {
        setTacoOptions([...tacoOptions, option]);
    }

    function showSelections() {
        return tacoOptions.reduce(
            (accumulator, currentValue, currentIndex, tacoOptions) => {
                if (currentIndex === tacoOptions.length - 1) {
                    return `${accumulator}, and ${currentValue}`;
                }
                return `${accumulator}, ${currentValue}`;
            }
        );
    }
    return (
        <>
            <div className="mains">
                <button onClick={() => addOption("Chicken")} type="button">Chicken</button>
                <button onClick={() => addOption("Beef")} type="button">Beef</button>
                <button onClick={() => addOption("Vegetarian")} type="button">Vegetarian</button>
            </div>
            <div className="cheeses">
                <button onClick={() => addOption("Cheddar")} type="button">Add Cheddar</button>
                <button onClick={() => addOption("Queso Fresco")} type="button">Add Queso Fresco</button>
            </div>
            <div className="extras">
                <button onClick={() => addOption("Sour Cream")} type="button">Add Sour Cream</button>
                <button onClick={() => addOption("Salsa")} type="button">Add Salsa</button>
            </div>
            <div>
                <p>Your taco includes: {showSelections()}</p>
            </div>
        </>
    );
}