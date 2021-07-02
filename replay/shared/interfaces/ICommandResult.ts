export default interface ICommandWithResult {
  id: number;
  tabId: number;
  frameId: number;
  name: string;
  label: string;
  args?: string;
  startDate: number;
  endDate?: number;
  duration: number;
  isError: boolean;
  frameIdPath?: string;
  result: any;
  resultType?: string;
  resultNodeIds?: number[];
  resultNodeType?: string;
  failedJsPathStepIndex?: number;
  failedJsPathStep?: string;
}
