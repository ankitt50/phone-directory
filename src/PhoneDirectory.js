import React,{Component} from 'react';
import AddSubscriber from './AddSubscriber';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import ShowSubscribers from './ShowSubscribers';
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

    deleteSubscriber = (subscriberId) => {
        var newSubscribersList = this.state.subscribersListToShow;
        var indexToBeDeleted = 0;
        newSubscribersList.forEach(function (currentSubscriber, index) {
            if(currentSubscriber.id === subscriberId) {
                indexToBeDeleted = index;
            }
        },this)
        newSubscribersList.splice(indexToBeDeleted,1);
        this.setState({
            subscribersListToShow: newSubscribersList
        });
    }

    render() {
        // return <AddSubscriber addSubscriberHandler={this.addSubscribers}/>
        return <Router>
            <div>
                <Route exact path='/' render={(props) => <ShowSubscribers {...props} subscribers={this.state.subscribersListToShow} deleteSubscriber={this.deleteSubscriber}/>}/>
                <Route exact path='/add' render={({history},props) => <AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscribers}/>}/>
            </div>
        </Router>
    }
}


export default PhoneDirectory;