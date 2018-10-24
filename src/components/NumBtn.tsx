import * as React from 'react';

interface INumBtnProps {
  n: number;
  onClick: (num: number) => void;
};

export class NumBtn extends React.Component<INumBtnProps, {}> {
  constructor(props: INumBtnProps) {
    super(props);
  }
  public render() {
    return (
      <button onClick={this.onClick}>
        {this.props.n}
      </button>
    );
  }
  private onClick = () => this.props.onClick(this.props.n);
};