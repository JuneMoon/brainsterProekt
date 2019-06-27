import React from "react";
import { Button } from "reactstrap";

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
                    <Button onClick={this.closeMenu}  
                        >
                           Мени X
                    </Button>
                    <div>otvoreno</div>
                </div> :
                <Button
                    onClick={this.openMenu}
                >
                    Click Me
                </Button>
            }
        </div>
    );
  }
}  
export default NavButton;