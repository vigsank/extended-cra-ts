export interface IObjectWithVariableKeyAndValue {
  [key: string]: string;
}

export interface ICommonInterface {
  className?: string;
  classes?: IObjectWithVariableKeyAndValue;
}
