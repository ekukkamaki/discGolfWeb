import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
var FontAwesome = require('react-fontawesome');


@inject('commonStore')
@observer
class Header extends React.Component {  

    handleMenuOpenHide = () => {
        this.props.commonStore.setMenuToOppositeState();
    }
    closeMenu = () => {
      this.props.commonStore.closeMenu();
    }

    render() {
        const { menuVisible, loading } = this.props.commonStore;
        
        return (
            <div>
                
            
                <nav className="navbar is-primary is-transparent">
  <div className="navbar-brand" onClick={this.handleMenuOpenHide}>
    <a className="navbar-item" href="/">
    <FontAwesome name="fas fa-bed" style={{ fontSize: 30}} />      
    </a>
    <div className="navbar-burger burger">
      <span></span>
      <span></span>
      <span></span>      
    </div>
  </div>

  <div className={ 'navbar-menu ' + (menuVisible ? "is-active" : "")}>
    <div className="navbar-start">
      <a className="navbar-item" style={{color: "red"}} href="https://bulma.io/">
        Pelatut kierrokset
      </a>
      <div className="navbar-item has-dropdown is-hoverable">
        <div className="navbar-link" href="/documentation/overview/start/">
          Yleiset
        </div>
        <div className="navbar-dropdown is-boxed">
          <div className="navbar-item">          
            <Link to="/players" className="nav-link">
              <span onClick={this.closeMenu}>Lisää pelaajia</span>
            </Link>          
          </div>
          <div className="navbar-item">
            <Link to="/courses" className="nav-link">
              <span onClick={this.closeMenu}>Lisää kenttiä</span>
            </Link>            
          </div>                    
        </div>
      </div>
    </div>

    <div className="navbar-end">
      <div className="navbar-item">
        <div className="field is-grouped">
          <p className="control">
            <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
              <span className="icon">
                <i className="fab fa-twitter"></i>
              </span>
              <span>
                Tweet
              </span>
            </a>
          </p>
          <p className="control">
            <a className="button is-primary" href="https://github.com/jgthms/bulma/releases/download/0.7.1/bulma-0.7.1.zip">
              <span className="icon">
                <i className="fas fa-download"></i>
              </span>
              <span>Download</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</nav>

            </div>

        )
    }
}
export default Header;