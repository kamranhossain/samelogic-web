import React from 'react'
import create from '/imports/api/surveys/methods/create'

class NotFound extends React.Component {
    render() {
        const id = create.call({
            title: 'This is a demo Title',
            description: 'This is a demo description'
        }, (err, resp) => {
            
        })
        console.log(id)
        return (
        <div>
            <h1>404!</h1>
            Route not found :/
        </div>
        )
    }
}

export default NotFound
