import * as React from 'react';

import { NumBtn } from '../components/NumBtn';
import { PlusBtn } from '../components/PlusBtn';
import { Result } from '../components/Result';

export class CalculatorContainer extends React.Component<{}, {}> {
  public render() {
    const elements: JSX.Element[] = [];
    for (let i = 0; i < 3; i++) {
      const rows: JSX.Element[] = [];
      for (let j = 0; j < 3; j++) {
        const val = i * 3 + j + 1;
        rows.push(<NumBtn n={val} />);
      }
      elements.push(
        <div>
          {rows}
        </div>
      );
    }
    return (
      <div>
        {elements}
        <div>
          <NumBtn n={0} />
          <PlusBtn />
        </div>
        <Result />
      </div>
    );
  }
};
