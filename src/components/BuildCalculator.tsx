import { ChangeEvent, useEffect, useState } from 'react';
import NumberInput from './NumberInput';
import NumberOutput from './NumberOutput';
import SelectField from './SelectField';

import { calculateHP, calculateWeight } from '../calculations/statCalculations';

import '../styles/calculatorStyle.scss';

const minVitality = 8;
const minVigor = 5;
const minCapacity = 7;
const minMotivity = 5;
const minTechnique = 5;
const minAdvance = 6;

function BuildCalculator() {
  const [hp, setHp] = useState(262);
  const [weight, setWeight] = useState(61.2);
  const [vitality, setVitality] = useState(minVitality);
  const [vigor, setVigor] = useState(minVigor);
  const [capacity, setCapacity] = useState(minCapacity);
  const [motivity, setMotivity] = useState(minMotivity);
  const [technique, setTechnique] = useState(minTechnique);
  const [advance, setAdvance] = useState(minAdvance);
  const [startingClass, setStartingClass] = useState<number | null>(null);

  const selectClass = (e: ChangeEvent<HTMLSelectElement>) => {
    setStartingClass(Number(e.target.value));
  }

  // update resulting stats when current stat changes
  useEffect(() => {
    setHp(calculateHP(vitality))
  }, [vitality]);

  useEffect(() => {
    setWeight(calculateWeight(capacity))
  }, [capacity]);

  // Change stat values when starting class changes
  useEffect(() => {
    switch(startingClass) {
      case 0:
        setVitality(11);
        setVigor(5);
        setCapacity(11);
        setMotivity(11);
        setTechnique(5);
        setAdvance(6);
        break;
      case 1:
        setVitality(8);
        setVigor(12);
        setCapacity(7);
        setMotivity(5);
        setTechnique(11);
        setAdvance(6);
        break;
      case 2:
        setVitality(9);
        setVigor(7);
        setCapacity(8);
        setMotivity(9);
        setTechnique(9);
        setAdvance(9);
        break;
    }
  }, [startingClass]);

  return (
    <main>
      <h1 className="title">Build Calculator</h1>
      <div id="build-calculator">
        <div id="current-stats" className="calc-module">
          <h2>Current stats</h2>
          <div className="calc-items">
            <SelectField
              title="Starting Class"
              options={[
                "Path of the Sweeper: Strength",
                "Path of the Bastard: Dexterity",
                "Path of the Cricket: Balance",
              ]}
              onSelect={selectClass}
            />
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
            <NumberOutput name="Weight" value={weight} />
            <NumberOutput name="Legion" value={0} />
            <NumberOutput name="Guard Regain" value={0} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default BuildCalculator