import React from 'react';
import { observer, inject } from 'mobx-react';


@inject('courseStore')
@observer
class Courses extends React.Component {  

    constructor() {
        super();
        this._handleKeyPress = this._handleKeyPress.bind(this);
      }

    componentDidMount() {        
        for (let x in this.refs) {                     
            this.refs[x].onkeypress = (e) =>
                this._handleKeyPress(e, x);
        }
    }
    _handleKeyPress(e, field) {
        if (e.keyCode >= 48 && e.keyCode <= 57) { 
            // 0-9 only

            // Prevent form submission if button present            
            e.preventDefault();
            //keep the value what user gives
            this.refs[parseInt(field)].value = e.key;
            //get next index
            let nextIndex = (parseInt(field) + 1);
            //get next element            
            let next = this.refs[nextIndex];
            //if its found and is input type
            if (next && next.tagName === "INPUT") {
                //move focus to next                
                this.refs[nextIndex].focus();
              }             
        }        
    }

    handleNumberOfFieldsChange = e => {
        this.props.courseStore.setNumberOfFields(e.target.value);
    }
    handleParChange = e => {
        console.log(e);
    }

    render() {
        const {
            numberOfFields
        } = this.props.courseStore.courseInfo;

        const newStyle = {
            position: 'left'
        };

        return (
            <div className="content">
                <h2>Lisää uusi kenttä</h2>
                <form>
                    <div className="field">
                    <label className="label">Kentän nimi</label>
                        <div className="control">
                            <input 
                                className="input" 
                                type="text" 
                                placeholder="e.g Monttu"
                                onChange={this.handleNameChange} />
                        </div>
                    </div>   
                    <div className="field">
                    <label className="label">Väylien määrä</label>
                        <div className="control">
                            <input 
                                className="slider is-fullwidth is-success has-output-tooltip" 
                                step="1" min="1" max="50" 
                                value={numberOfFields} 
                                type="range" 
                                onChange={this.handleNumberOfFieldsChange} />
                            <output style={newStyle} htmlFor="sliderWithValue">{numberOfFields}</output>                            
                        </div>
                    </div>  
                    <label className="label">Kentän par tulokset</label>
                    <div className="field is-grouped is-grouped-multiline">                    
                    {
                        this.props.courseStore.courseInfo.fieldNumbers.map(fieldNumber => {
                            return (      
                                <div className="control" key={fieldNumber}>
                                    <label className="field-label">{fieldNumber + '.'}</label>
                                    <input className="input is-small very-narrow-width" type="text" placeholder={fieldNumber} ref={fieldNumber} name={fieldNumber} />
                                </div>                      
                            )
                        })
                    }
                    </div> 
                    <div className="field">
                        <p className="control">
                            <button 
                                className="button is-primary"
                                disabled="true">
                                    Luo uusi Kenttä
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        )
    }
}
export default Courses