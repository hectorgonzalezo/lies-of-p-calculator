import { useEffect, useState } from 'react';
import NumberInput from './NumberInput';
import NumberOutput from './NumberOutput';

import { calculateHP } from '../calculations/statCalculations';

import '../styles/calculatorStyle.scss';

const minVitality = 8;
const minVigor = 5;
const minCapacity = 7;
const minMotivity = 5;
const minTechnique = 5;
const minAdvance = 6;

function BuildCalculator() {
  const [hp, setHp] = useState(262);
  const [vitality, setVitality] = useState(minVitality);
  const [vigor, setVigor] = useState(minVigor);
  const [capacity, setCapacity] = useState(minCapacity);
  const [motivity, setMotivity] = useState(minMotivity);
  const [technique, setTechnique] = useState(minTechnique);
  const [advance, setAdvance] = useState(minAdvance);

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
              min={minVitality}
            />
            <NumberInput
              name="Vigor"
              value={vigor}
              changeValue={setVigor}
              min={minVigor}
            />
            <NumberInput
              name="Capacity"
              value={capacity}
              changeValue={setCapacity}
              min={minCapacity}
            />
            <NumberInput
              name="Motivity"
              value={motivity}
              changeValue={setMotivity}
              min={minMotivity}
            />
            <NumberInput
              name="Technique"
              value={technique}
              changeValue={setTechnique}
              min={minTechnique}
            />
            <NumberInput
              name="Advance"
              value={advance}
              changeValue={setAdvance}
              min={minAdvance}
            />
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