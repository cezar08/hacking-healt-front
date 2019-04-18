import React, { Component } from 'react';

export default class InputCheckboxComponent extends Component {
    render() {
        return (
            <div className="InputText">
                <h3><span>{this.props.sequence}</span>{this.props.element.title}</h3>
                <label className="LabelInputText">
                    <span>{this.props.element.subtitle}</span>
                    <span>{this.props.element.hint}</span>
                    {this.props.element.options.map(op => {
                       return <div><input type="checkbox" name={this.props.element.id} value={op.value} /> {op.description}</div>
                    })}
                </label>            
                
            </div>
        );
    }
}