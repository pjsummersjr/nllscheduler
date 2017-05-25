/// <reference types="react" />
import * as React from 'react';
export declare class VenueMap extends React.Component<{}, {}> {
    private MapReady;
    render(): React.ReactElement<{}>;
    componentDidMount(): void;
    /**
     * name
     */
    SetMapReady(ready: boolean): void;
    IsMapReady(): boolean;
}
