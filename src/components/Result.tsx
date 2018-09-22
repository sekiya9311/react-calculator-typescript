import * as React from 'react';

interface IResultProps {
  result: any
};

export class Result extends React.Component<IResultProps, {}> {
  constructor(props: IResultProps) {
    super(props);
  }
  public render() {
    return (
      <div>
        Result: <span>{this.props.result}</span>
      </div>
    );
  }
};