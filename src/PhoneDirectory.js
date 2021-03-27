import React,{Component} from 'react';
import AddSubscriber from './AddSubscriber';

class PhoneDirectory extends Component {


    constructor() {
        super();
        this.state = {
            subscribersListToShow: [
            ]
        }
    }

    addSubscribers = (newSubscriber) => {
        if(this.state.subscribersListToShow.length > 0) {
            const subscribersListToShow = this.state.subscribersListToShow;
            newSubscriber.id = this.state.subscribersListToShow.length;
            subscribersListToShow.push(newSubscriber);
            this.setState({subscribersListToShow: subscribersListToShow});
            console.log('Phone Directory');
            console.log(subscribersListToShow);
        }
        else {
            newSubscriber.id = 0;
            this.setState({
                subscribersListToShow: [
                    newSubscriber
                ]
            })
            console.log('Phone Directory');
        }
    }

    render() {
        return <AddSubscriber addSubscriberHandler={this.addSubscribers}/>
    }
}


export default PhoneDirectory;