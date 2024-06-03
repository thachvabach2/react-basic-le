import React from 'react'
import { withRouter } from 'react-router'
import Color from '../HOC/Color'
import logo from '../../assets/images/download.jpg'
import { connect } from 'react-redux'

class Home extends React.Component {
    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo')
        // }, 3000)
    }

    //prettier-ignore
    render() {
        {console.log('>>> Check props redux: ', this.props.dataRedux)}
        return (
            <>
                <div>
                    Hello World from Homepage
                </div>
                <div>
                    <img src={logo} style={{marginTop: '20px'}}/>
                </div>
            </>
        )  
    }
}

// Cách kết nối vơi redux, đến dòng cuối
// state của redux
const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

// HOC: higher order component: Color(Home)
// Home sẽ có props của withRouter
// export default withRouter(Home);
export default connect(mapStateToProps)(Color(Home))
