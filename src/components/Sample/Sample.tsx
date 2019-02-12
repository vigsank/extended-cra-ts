import classNames from "classnames";
import * as React from "react";
import injectSheet from "react-jss";
import { connect } from "react-redux";
import { ICommonInterface } from "../../interfaces/CommonInterface";
import sampleJss from "./Sample.jss";
import react_logo from "../../resources/react.svg";

export interface ISampleBaseProps extends React.HTMLAttributes<HTMLElement> {}

export interface ISampleStateProps {
  onIncrementCounter: () => void;
  count: number;
}

export type ISampleFinalProps = ISampleBaseProps &
  ISampleStateProps &
  ICommonInterface;

class SampleComponent extends React.Component<ISampleFinalProps, {}> {
  public render() {
    const { classes } = this.props;
    return (
      <>
        <div className={classNames(classes!.textAlignCenter)}>
          Count : {this.props.count}
        </div>
        <br />
        <div className={classNames(classes!.textAlignCenter)}>
          <button onClick={this.props.onIncrementCounter}>
            Increment Count
          </button>
        </div>
        <br />
        <img src={react_logo} />
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onIncrementCounter: () =>
      dispatch({
        type: "INCREMENT"
      })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectSheet(sampleJss)(SampleComponent));
