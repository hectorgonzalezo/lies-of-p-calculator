import NumberInput from './numberInput';

import '../styles/calculatorStyle.scss';

function BuildCalculator() {
  return (
    <main>
      <h1 className="title">Build Calculator</h1>
      <div id="build-calculator">
        <div id="current-stats" className="calc-module">
          <h2>Current stats</h2>
          <div className="calc-items">
            <NumberInput name="vitality" img="vitality.png" />
            <NumberInput name="vigor"/>
            <NumberInput name="capacity"/>
          </div>
        </div>
        <div id="build-stats" className="calc-module">
          <h2>Total Stats</h2>
          <div className="calc-items"></div>
        </div>
      </div>
    </main>
  );
}

export default BuildCalculator