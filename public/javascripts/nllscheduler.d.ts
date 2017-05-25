/// <reference types="react" />
import * as React from 'react';
export interface ISchedulerState {
    selectedMonth: string;
    selectedTeam: string;
    selectedDay: string;
}
export default class NLLScheduler extends React.Component<ISchedulerState, ISchedulerState> {
    constructor();
    componentWillMount(): void;
    render(): React.ReactElement<{}>;
}
