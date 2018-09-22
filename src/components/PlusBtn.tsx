import * as React from 'react';

interface IPlusBtnProps {
  onClick: () => void;
};

export class PlusBtn extends React.Component<IPlusBtnProps, {}> {
  constructor(props: IPlusBtnProps) {
    super(props);
  }
  public render() {
    return (
      <button onClick={this.props.onClick}>
        +
      </button>
    );
  }
};