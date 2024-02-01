import './wheel.css';
import Arrow from './arrow.svg';
import Ellipse from './Ellipse.svg';
import {
  customStyle,
  getWheelVars,
} from '../../utils/helper';
import { arrowStyles, leftEllipseStyles, rightEllipseStyles } from './styles';
import React from 'react';
interface WheelProps {
  items: string[];
  onSelectItem?: (selectedItem: number) => void;
}

interface WheelState {
  selectedItem: any;
  isActive: boolean;
  angle: number;
  startAngle: number;
  currentAngle: number;
}

export class Wheel extends React.Component<WheelProps, WheelState> {
  box: any;
  state: WheelState;
  constructor(props: WheelProps) {
    super(props);
    this.state = {
      selectedItem: null,
      isActive: false,
      angle: 0,
      startAngle: 0,
      currentAngle: 0,
    };
    this.selectItem = this.selectItem.bind(this);
    this.deslectAll = this.deslectAll.bind(this);
  }

  selectItem() {
    if (this.state.selectedItem === null) {
      const selectedItem = 1;
      if(!selectedItem)
        this.setState({ selectedItem: null });
      else
        this.setState({selectedItem})
    }
    else {
      this.setState({ selectedItem: null });
      setTimeout(this.selectItem, 500);
      }
    }

  deslectAll() {
    if (window.getSelection) {
      window.getSelection()?.removeAllRanges();
    }
  }

  renderWheelItems = () => {
    const { items } = this.props;
    return items.map((item, index) => (
      <div className="wheel-item" key={index} style={customStyle(index)}>
        {item}
        <img src={Ellipse} style={rightEllipseStyles} />
        <img src={Ellipse} style={leftEllipseStyles} />
      </div>
    ));
  };

  render() {
    const { selectedItem } = this.state;
    const { items } = this.props;
    const wheelVars = getWheelVars(items.length, selectedItem);
    const spinning = selectedItem !== null ? 'spinning' : '';

    return (
      <>
        <img src={Arrow} style={arrowStyles} />
        <div
          className="wheel-container"
          ref={div => (this.box = div)}
        >
          <div
            className={`wheel ${spinning}`}
            style={wheelVars}
            onClick={this.selectItem}
          >
            {this.renderWheelItems()}
          </div>
        </div>
      </>
    );
  }
}
