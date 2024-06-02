import React from 'react'
import './Demo.scss'

class ChildComponent extends React.Component {
    state = {
        showJobs: false
    }

    handleShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnClickDelete = (job) => {
        console.log('>>>> Handle On Click Delete: ', job)
        this.props.deleteAJob(job)
    }

    render() {
        // console.log('>>> check props: ', this.props)

        let { arrJobs } = this.props
        let { showJobs } = this.state

        // prettier-ignore
        return (
            <>
                {
                    showJobs === false ? 
                    <div>
                        <button
                            className='btn-show'
                            onClick={() =>  this.handleShowHide()}>
                            Show
                        </button>
                    </div>
                    :
                    <>
                        <div className='job-lists'>
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary}
                                            <></> <span onClick={() => this.handleOnClickDelete(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div onClick={() => this.handleShowHide()}><button>Hide</button></div>
                    </>
                }
            </>
        );
    }
}

// const ChildComponent = (props) => {
//     let { arrJobs } = props
//     return (
//         <>
//             <div className='job-lists'>
//                 {
//                     arrJobs.map((item, index) => {
//                         if (item.salary >= 500) {
//                             return (
//                                 <div key={item.id}>
//                                     {item.title} - {item.salary} $
//                                 </div>
//                             )
//                         }
//                     })
//                 }
//             </div>
//         </>
//     )
// }

export default ChildComponent
