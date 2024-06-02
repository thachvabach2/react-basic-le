import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class MyComponent extends React.Component {

    // state = {
    //     name: '',
    //     channel: 'Hoi Dan IT'
    // }

    state = {
        arrJobs: [
            {id: 'abcJob1', title: 'Developer', salary: '500'},
            {id: 'abcJob2', title: 'Tester', salary: '400'},
            {id: 'abcJob3', title: 'Project Manager', salary: '1000'}
        ]
    }

    addNewJob = (job) => {
        console.log('Check job from parent: ', job)
        this.setState({
            // arrJobs: this.state.arrJobs.push(job)
            arrJobs: [...this.state.arrJobs, job]
        })
    }

    deleteAJob = (job) => {
        let currentJobs = this.state.arrJobs;
        currentJobs = currentJobs.filter(item => item.id  !== job.id);
        this.setState({
            arrJobs: currentJobs
        })
    }

    /*
        JSX => return a block
    */

        handleOnChangeName = (event) => {
            this.setState({
                name: event.target.value
            })
        }

        handleClickButton = () => {
            console.log('hit the button')
            alert('click me')
        }

    componentDidUpdate (prevProps, prevState) {
         console.log('>> rung didUpdate: ', 'prev state: ', prevState, ' current state: ', this.state)
    }

    componentDidMount() {
        console.log('>>> run component did mount ')
    }

    render() {
        return (
            <>
                {console.log('call render: ', this.state)}
                <AddComponent 
                addNewJob = {this.addNewJob}
                />

                <ChildComponent 
                arrJobs = {this.state.arrJobs}
                deleteAJob = {this.deleteAJob}
                />
            </>
        );
    }
}

export default MyComponent;