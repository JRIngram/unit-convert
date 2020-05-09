import React from 'react';
import { convertMass, convertVolume } from '../convertor/convertor';
import DisplayUnit from '../components/DisplayUnit'
import UnitDropdown from './UnitDropdown';

/**
 * Component which handles the input and conversion of inputs to units.
 * Includes: text inputs and dropdowns.
 */
class InputRow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            fromValue: 0,
            fromUnit: 'kg',
            toValue: 0,
            toUnit: 'kg',
        };

        this.fromValueChange = this.fromValueChange.bind(this);
        this.fromUnitChange = this.fromUnitChange.bind(this);
        this.toUnitChange = this.toUnitChange.bind(this);
    }

    convertUnit(){
        let convertedValue = '';
        try{
            const fromUnit = this.state.fromUnit;
            if(fromUnit === 'g' || fromUnit === 'kg' || fromUnit === 'mg' || fromUnit === 'lb' || fromUnit === 'st'){
                //Convert to mass if mass unit
                console.log(this.state.fromValue, this.state.fromUnit, this.state.toUnit);
                convertedValue = convertMass(this.state.fromValue, this.state.fromUnit, this.state.toUnit);
            }
            if(fromUnit === 'm3' || fromUnit === 'l' || fromUnit === 'ml' || fromUnit === 'pt (imp)' || fromUnit === 'cup (mt)'){
                //Convert to volume if volume unit
                convertedValue = convertVolume(this.state.fromValue, this.state.fromUnit, this.state.toUnit);
            }
        }catch(Error){
            // If using incompatible units: convert to same type of unit
            const fromUnit = this.state.fromUnit;
            if(fromUnit === 'g' || fromUnit === 'kg' || fromUnit === 'mg' || fromUnit === 'lb' || fromUnit === 'st'){
                //Convert to mass if mass unit
                this.setState({toUnit: 'g'});
            }
            if(fromUnit === 'm3' || fromUnit === 'l' || fromUnit === 'ml' || fromUnit === 'pt (imp)' || fromUnit === 'cup (mt)'){
                //Convert to volume if volume unit
                this.setState({toUnit: 'l'});
            }
        }
        console.log("CONVERTED VALUE: " + convertedValue);
        this.setState({toValue: convertedValue}, () => {console.log(`${this.state.fromValue} has been converted to ${this.state.toValue}`)});
    }

    /**
     * Change the fromValue and re-convert units
     * @param {*} event 
     */
    fromValueChange(event){
        this.setState({fromValue: event.target.value}, () => this.convertUnit());
    }

    /**
     * Change the fromUnit and re-convert units
     * @param {*} event 
     */
    fromUnitChange(event){
        this.setState({fromUnit: event.target.value}, () => this.convertUnit());
    }

    /**
     * Change the toUnit and re-convert units
     * @param {*} event 
     */
    toUnitChange(event){
        this.setState({toUnit: event.target.value}, () => this.convertUnit());
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.fromValue} onChange={this.fromValueChange}/>
                <UnitDropdown unit={this.state.fromUnit} onChange={this.fromUnitChange} />

                <img className="arrow" src="arrow.svg" alt="-->"/>

                <DisplayUnit toValue={this.state.toValue} />
                <UnitDropdown unit={this.state.toUnit} onChange={this.toUnitChange}/>
            </div>
        );
    }
}

export {InputRow as default}