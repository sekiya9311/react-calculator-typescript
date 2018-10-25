import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import { onNumClick, onPlusClick } from "../actions";
import { NumBtn } from '../components/NumBtn';
import { PlusBtn } from '../components/PlusBtn';
import { Result } from '../components/Result';
import { IApplicationState } from '../reducers';


interface IFromDispatchProps {
  onNumClick: typeof onNumClick
  onPlusClick: typeof onPlusClick
};

interface ICalculatorProps {
  value: number
};

type AllProps = IFromDispatchProps & ICalculatorProps;

class CalculatorContainer extends React.Component<AllProps, {}> {
  public render() {
    const elements: JSX.Element[] = [];
    for (let i = 0; i < 3; i++) {
      const rows: JSX.Element[] = [];
      for (let j = 0; j < 3; j++) {
        const val = i * 3 + j + 1;
        rows.push(<NumBtn n={val} onClick={this.props.onNumClick} />);
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
          <NumBtn n={0} onClick={this.props.onNumClick} />
          <PlusBtn onClick={this.props.onPlusClick} />
        </div>
        <Result result={this.props.value} />
      </div>
    );
  }
};

const mapStateProps = ({ appState }: IApplicationState): ICalculatorProps => ({
  value: appState.showingResult ? appState.resultValue : appState.inputValue
});

const mapDispatchProps = (dispatch: Dispatch): IFromDispatchProps => ({
  onNumClick: (num: number) => dispatch(onNumClick(num)),
  onPlusClick: () => dispatch(onPlusClick())
});

export default connect(
  mapStateProps,
  mapDispatchProps
)(CalculatorContainer);