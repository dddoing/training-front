import React from 'react'

class home extends React.Component {
    //
    componentDidMount() {
        //
        const {history,location,match} = this.props
        console.log(history,location,match)
    }

    //
    render() {
        return(
            <div>Home</div>
        )
    }
}
export default home;