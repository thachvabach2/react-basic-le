import React from 'react'
import { withRouter } from 'react-router'
import Color from '../HOC/Color'
import logo from '../../assets/images/download.jpg'
import { connect } from 'react-redux'
import { type } from '@testing-library/user-event/dist/type'

class Home extends React.Component {
    componentDidMount() {
        // setTimeout(() => {
        //     this.props.history.push('/todo')
        // }, 3000)
    }

    handleDeleteUser = (user) => {
        console.log('>>> Check user delete: ', user)
        this.props.deleteUserRedux(user)
    }

    handleCreateUser = () => {
        this.props.addUserRedux()
    }

    //prettier-ignore
    render() {
        console.log('>>> Check props redux: ', this.props.dataRedux)
        let listUsers = this.props.dataRedux
        
        //prettier-ignore
        return (
            <>
                <div>
                    Hello World from Homepage
                </div>
                <div>
                    <img src={logo} style={{marginTop: '20px'}}/>
                </div>
                <div>
                    {listUsers && listUsers.length > 0 &&

                    listUsers.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {index + 1} - {item.name} 
                                &nbsp; <span onClick={() => this.handleDeleteUser(item)}>x</span>
                            </div>
                        )
                    })

                    }
                    <button onClick={() => this.handleCreateUser()}>Add new</button>
                </div>
            </>
        )  
    }
}

// Cách kết nối vơi redux: đến dòng cuối
// state của redux
const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

// hàm mapDispatchToProps có tác dụng fire action
// prettier-ignore
const mapDispatchToProps = (dispatch) => {
    return {
        // payload: là đầu vào của hàm deleteUserRedux
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'CREATE_USER' })
    }
}

// HOC: higher order component: Color(Home)
// Home sẽ có props của withRouter
// export default withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home))
