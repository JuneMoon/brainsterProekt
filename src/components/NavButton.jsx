import React from "react";

class NavButton extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    }   
  }
  openMenu = () => {
      this.setState({ open: true });

  }
  closeMenu = () => {
      this.setState({ open: false});
  }
  render() {
    console.log('rerender');
    return (
        <div>
            {
                this.state.open ?
                <div>
                    <button onClick={this.closeMenu}  
                        >
                            X
                    </button>
                    <div>otvoreno</div>
                </div> :
                <button
                    onClick={this.openMenu}
                >
                    Click Me
                </button>
            }
        </div>
    );
  }
}  
export default NavButton;