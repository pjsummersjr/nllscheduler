/// <reference types="react" />
import * as React from 'react';
import { game } from '../scheduledata';
export interface IGameState {
    games: game[];
}
export interface IGameListProps {
    SelectedMonth?: string;
    SelectedTeam?: string;
    SelectedDayOfWeek?: string;
}
export declare class GameList extends React.Component<IGameListProps, IGameState> {
    constructor();
    componentDidMount(): void;
    private _loadGames();
    render(): React.ReactElement<{}>;
}
