import React from "react";
import { withRouter } from "react-router";
import Color from "../HOC/Color";

class Home extends React.Component {
    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo')
        // }, 3000)
    }

    render () {
        console.log('>>> Check props: ', this.props)
        return (
            <div>
                Hello World from Homepage
            </div>
        )
    }
}

// HOC: higher order component
// Home sẽ có props của withRouter
// export default withRouter(Home);
export default Color(Home);