import React, { Component } from 'react';
import Color from '../component/Color';
import './Colortheme.css'

class Colortheme extends Component {

    constructor(){
        super();
        this.state ={
            colorNum: 100,
            colors: []
        }
        for(let i=0; i<this.state.colorNum;i++){
            this.state.colors.push({hexCode: this.generateColor()});
        }    
    }
    
    generateColor(){
        return '#' + Math.random().toString(16).substr(-6);
    }

    updateColor(index){
        let updcolors=this.state.colors.slice();
        const currentColor=this.generateColor();
        updcolors[index].hexCode=currentColor;
        this.setState({
            colors: updcolors   
        })
    }

    render() {
        return (
            <div className='color-container'>
                {this.state.colors.map((color,index)=>
                    <Color
                        key={`color-${index}`} index={index} update={this.updateColor.bind(this)} hexCode={color.hexCode}
                    />
                )}
            </div>
        );
    }
}

export default Colortheme;