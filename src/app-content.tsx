import { ObjectiveSelectionStep } from './wizard/objective-selection-step';
import { BenefitsCalculator } from './calculator/benefits-calculator';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';

export const AppContent = () => {
    return (
    <Router>
    <div>
      <Switch>
        <Route path="/calculator">
          <BenefitsCalculator />
        </Route>
        <Route path="/">
          <ObjectiveSelectionStep />
        </Route>
      </Switch>
    </div>
  </Router>);
};