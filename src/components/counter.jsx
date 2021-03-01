import React, { Component } from 'react';
class Counter extends Component {
    //  state = { value : this.props.counter.value
    //     //tags:[]
    // };
    // constructor()
    // {  super();
    //     this.handleIncrement= this.handleIncrement.bind(this);
    //     //console.log('constructor',this);
    // }

    //  handleIncrement=()=>
    //  {
    //      console.log("Increment counter", this);
    //      this.setState({value: this.state.value+1});
    //  }
     
    
    render() { 
        //className={this.getBadgeClasses()}
        
        return (
          
        <React.Fragment>
          {this.props.children}
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          <button className="btn btn-secondary" onClick={()=> this.props.onIncrement(this.props.counter)}>
          increment
          </button>
          <button onClick={()=> this.props.onDelete(this.props.counter.id)} 
          className="btn btn-danger btn-sm m-2">Delete</button>
         
        </React.Fragment>
        );
    }
    getBadgeClasses(){
        let classes= "badge m-2 badge-";
        classes += this.props.counter.value === 0? "warning":"primary";
        return classes;
    }
     formatCount() {
          const {value}=this.props.counter;
        return value===0? 'Zero':value; 
     }
    
}
    

 
export default Counter;