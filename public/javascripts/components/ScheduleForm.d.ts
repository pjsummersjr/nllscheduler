/// <reference types="react" />
import * as React from 'react';
import { team, day } from '../scheduledata';
export interface IFormProps {
    teams: team[];
    days: string[];
    dates: string[];
}
export interface ISchedState {
    teams: team[];
    days: string[];
    dates: day[];
}
export declare class SchedForm extends React.Component<{}, ISchedState> {
    constructor();
    componentWillMount(): void;
    render(): React.ReactElement<{}>;
}
