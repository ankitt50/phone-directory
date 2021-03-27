import React,{Component} from 'react';
import Header from './Header';
import './AddSubscriber.css';
class AddSubscriber extends Component {

    constructor() {
        super();
        this.state={
            id: 0,
            name: '',
            phone: ''
        };
    }

    inputChangeHandler = (e) => {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
        //console.log(state);
    }

    render() {
        return <div>
            <Header heading="Add Subscriber" />
            <div className="inner-container-component">
                <button className="back-btn">Back</button>
                <form>
                    <label htmlFor="name" className="form-lbl">Name: </label><br/>
                    <input type="text" id="name" className="form-text-input" name="name" onChange={this.inputChangeHandler}></input><br/><br/>
                    <label htmlFor="phone" className="form-lbl">Phone: </label><br/>
                    <input type="text" id="phone" className="form-text-input" name="phone" onChange={this.inputChangeHandler}></input><br/><br/>
                    <div className="subscriber-to-be-added-div">
                        <span className="subscriber-heading">Subscriber to be added</span><br/>
                        <span className="subscriber-name">Name: {this.state.name}</span><br/>
                        <span className="subscriber-phone">Phone: {this.state.phone}</span><br/>
                    </div>
                    <button type="submit" className="add-subscriber-btn">Add</button>
                </form>
            </div>
            </div>
    }
}

export default AddSubscriber;