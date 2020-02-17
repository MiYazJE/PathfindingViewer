import React, { Component } from 'react';

export class MazeControls extends Component {

    render() {
        const { onClick, startDijkstra, clearGrid } = this.props;
        return (
            <div className="MazeControls">
                <button className="btnControls" onClick={() => onClick('initial')}>
                    Set Initial
                </button>
                <button className="btnControls" onClick={() => onClick('final')}>
                    Set Final
                </button>
                <button className="btnControls" onClick={() => onClick('wall')}>
                    Set Walls
                </button>
                <button className="btnControls" onClick={() => onClick('clear')}>
                    Clear cell
                </button>
                <button className="btnControls" onClick={clearGrid}>
                    Clear grid
                </button>
                <button className="btnDijkstra" onClick={startDijkstra}>
                    Start Dikjstra
                </button>
            </div>
        );
    }
}

export default MazeControls;
