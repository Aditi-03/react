import React, { Component } from 'react';
class Counter extends Component {
     state = { value : this.props.value
        //tags:[]
    };
    // constructor()
    // {  super();
    //     this.handleIncrement= this.handleIncrement.bind(this);
    //     //console.log('constructor',this);
    // }

     handleIncrement=()=>
     {
         console.log("Increment counter", this);
         this.setState({value: this.state.value+1});
     }
     
    
    render() { 
        //className={this.getBadgeClasses()}
        console.log("props",this.props);
        return (
        <React.Fragment>
          
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button className="btn btn-secondary" onClick={this.handleIncrement}>
          increment
          </button>
        </React.Fragment>
        );
    }
    getBadgeClasses(){
        let classes= "badge m-2 badge-";
        classes += this.state.count === 0? "warning":"primary";
        return classes;
    }
     formatCount() {
          const {count}=this.state;
        return count===0? 'Zero':count; 
     }
    
}
    

 
export default Counter;