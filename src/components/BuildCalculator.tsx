import { useEffect, useState } from 'react';
import NumberInput from './NumberInput';
import NumberOutput from './NumberOutput';

import { calculateHP } from '../styles/calculations/statCalculations';

import '../styles/calculatorStyle.scss';

function BuildCalculator() {
  const [hp, setHp] = useState(262);
  const [vitality, setVitality] = useState(8);

  useEffect(() => {
    setHp(calculateHP(vitality))
  }, [vitality])

  return (
    <main>
      <h1 className="title">Build Calculator</h1>
      <div id="build-calculator">
        <div id="current-stats" className="calc-module">
          <h2>Current stats</h2>
          <div className="calc-items">
            <NumberInput
              name="Vitality"
              value={vitality}
              changeValue={setVitality}
              min={8}
            />
            <NumberInput name="Vigor" />
            <NumberInput name="Capacity" />
            <NumberInput name="Motivity" />
            <NumberInput name="Technique" />
            <NumberInput name="Advance" />
          </div>
        </div>
        <div id="build-stats" className="calc-module">
          <h2>Total Stats</h2>
          <div className="calc-items">
            <NumberOutput name="HP" value={hp} />
            <NumberOutput name="Stamina" value={0} />
            <NumberOutput name="Weight" value={0} />
            <NumberOutput name="Legion" value={0} />
            <NumberOutput name="Guard Regain" value={0} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default BuildCalculator