import React,{Component} from 'react';
import Header from './Header';
import './AddSubscriber.css';
class AddSubscriber extends Component {
    render() {
        return <div>
            <Header heading="Add Subscriber" />
            <div className="inner-container-component">
                <button className="back-btn">Back</button>
                <form>
                    <label htmlFor="name" className="form-lbl">Name: </label><br/>
                    <input type="text" id="name" className="form-text-input" name="name"></input><br/><br/>
                    <label htmlFor="phone" className="form-lbl">Phone: </label><br/>
                    <input type="text" id="phone" className="form-text-input" name="phone"></input><br/><br/>
                    <div className="subscriber-to-be-added-div">
                        <span className="subscriber-heading">Subscriber to be added</span><br/>
                        <span className="subscriber-name">Name: </span><br/>
                        <span className="subscriber-phone">Phone: </span><br/>
                    </div>
                    <button type="submit" className="add-subscriber-btn">Add</button>
                </form>
            </div>
            </div>
    }
}

export default AddSubscriber;