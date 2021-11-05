import React, { useState } from "react";
import { Slider } from '../components/slider';

export const BenefitsCalculator = () => {
    // HSA 
    const [esppContribution, esppContributionChanged] = useState(0);
    const [totalValue, setTotalvalue] = useState(0);
    const [hsaContribution, setHsaContribution] = useState(0);

    return (
        <>
            <div>What dis haha</div>
            <Slider max={1} min={0} step={0.01} onChange={esppContributionChanged} value={esppContribution} />
            <Slider max={1} min={0} step={0.01} onChange={setHsaContribution} value={hsaContribution} />
            <Slider max={1} min={0} step={0.01} onChange={setTotalvalue} value={totalValue} />
        </> 
    );
}

// Order

// Inputs
    // Salary
    // How much cash you need
        // Regular expenses
        // Emergency fund
    // Start date

// 401k with match
// HSA  <20%>
// ESPP <10%>
// After tax 401k
// Brokerage

// Output
    // Net worth
        // How much in 401k vs bank vs brokerage 
    // Estimated future tax burden