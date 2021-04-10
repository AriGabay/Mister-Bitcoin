import { Component } from 'react';
import bitcoinService from '../../services/bitcoinService.js';
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesReferenceLine } from 'react-sparklines';
import './Chart.scss';

export class Chart extends Component {
  state = {
    dataArr: null,
  };
  componentDidMount() {
    bitcoinService.getMarketPrice().then((data) => {
      this.setState({ dataArr: data.values.map((val) => (val.x, val.y)) });
    });
  }
  render() {
    return (
      <div className="char-table">
        {this.state.dataArr && (
          <div className="chart-container">
            <h2 className="title-char">Statistic</h2>
            <div className="char-table">
              <Sparklines data={this.state.dataArr}>
                <SparklinesLine style={{ stroke: '#d1192e', strokeWidth: '1', fill: 'none' }} />
                <SparklinesReferenceLine type="avg" />
                <SparklinesSpots style={{ color: 'black' }} />
              </Sparklines>
            </div>
          </div>
        )}
      </div>
    );
  }
}
