import classNames from "classnames";
import * as React from "react";
import injectSheet from "react-jss";
import { ICommonInterface } from "../../interfaces/CommonInterface";
import youtTubeMasterHeaderStyles from "./Sample.jss";

export interface ISampleBaseProps extends React.HTMLAttributes<HTMLElement> {}

export type ISampleFinalProps = ISampleBaseProps & ICommonInterface;

class SampleComponent extends React.Component<ISampleFinalProps, {}> {
  public render() {
    const { classes } = this.props;
    return (
      <div className={classNames(classes!.masterHeader)}>
        SampleComponentContent
      </div>
    );
  }
}

export default injectSheet(youtTubeMasterHeaderStyles)(SampleComponent);
