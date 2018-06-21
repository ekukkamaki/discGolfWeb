import React from 'react'
import { observer, inject } from 'mobx-react'

@inject('playerStore')
@observer
class Player extends React.Component {    

    componentWillUnmount() {
        this.props.playerStore.reset();
    }
    
    handleNameChange = e => this.props.playerStore.setPlayerName(e.target.value);
    handleEmailChange = e => this.props.playerStore.setEmail(e.target.value);
    handleSubmitForm = (e) => {
        e.preventDefault();
        this.props.playerStore.addPlayer()
          .then(() => this.props.history.replace('/'));
      };

    render() {
        var inProgress = false;
        return (
            <div>
                <form onSubmit={this.handleSubmitForm}>
                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input 
                                className="input" 
                                type="text" 
                                placeholder="e.g Esa Kukkamäki"
                                onChange={this.handleNameChange} />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input 
                                className="input" 
                                type="email" 
                                placeholder="e.g. etu.sukunimi@gmail.com" 
                                onChange={this.handleEmailChange}/>
                        </div>
                    </div>
                    <div className="field">
                        <p className="control">
                            <button 
                                className="button is-primary"
                                disabled={inProgress}>
                                    Luo uusi pelaaja
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        )
    }
}
export default Player;