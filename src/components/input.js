import React, { Component } from 'react';

export default class Input extends Component
{
    render()
    {
        return(
            <input type={this.props.type} placeholder={this.props.placeholder} name ={this.props.name} className={this.props.className} onChange={this.props.onChange}  />
        )
    }
}
