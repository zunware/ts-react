import * as React from 'react';

type ChecboxProps = {
  labelOn: string;
  labelOff: string;
}

type CheckboxState = {
  isChecked: boolean
}

export class CheckboxWithLabel extends React.Component<ChecboxProps,CheckboxState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isChecked: false
    }
  }

  onChange = () => {
    this.setState({isChecked: !this.state.isChecked })
  }

  render(){
    return(
      <label>
        <input
          type="checkbox"
          checked={this.state.isChecked}
          onChange={this.onChange}
        />
        {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
      </label>
    )
  }
}