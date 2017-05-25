import * as React from 'react';

export class VenueMap extends React.Component<{},{}> {

    private MapReady: boolean = false;

    public render() : React.ReactElement<{}> {
        return (<div id="venuemap"></div>);
    }

    public componentDidMount(): void {
    }
    /**
     * name
     */        
    public SetMapReady(ready:boolean): void {
        this.MapReady = ready;
    }
    public IsMapReady() : boolean {
        return this.MapReady;
    }
}
