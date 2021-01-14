import React, {Component} from 'react'
import './List.css'
import Group from '../../components/Group/Group'
import Student from '../../components/Student/Student'
import axios from 'axios'

class List extends Component {

    state = {
        groups: [
            {name: '11РРТк', num: 11}
        ],
        students: [
            {name: 'Серикова Ю.В.'}
        ]
    }

    addHandler(index) {
        const groups = this.state.groups.concat()
        groups.splice(index, 1)
    
        this.setState({groups})
    }

    // async componentDidMount() {
    //     try {
    //         const response = await axios.get('https://online-attend-44b9a-default-rtdb.firebaseio.com/Groups.json')

    //         const groups = []

    //         Object.keys(response.data).forEach((key, value) => {
    //             console.log(key, value)
    //             groups.push({
    //                 id: key,
    //                 name: value,
    //             })
    //         })

    //         console.log(response.data)
    //         this.setState({
    //             groups
    //         })
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    render() {
        return (
            <div className='List'>
                <div className='Lists'>
                    <div className='Groups'>
                        { this.state.groups.map((group, index) => {
                            return (
                                <Group 
                                    key={index}
                                    name={group.name}
                                    num={group.num}
                                />
                            )
                        })}
                    </div>

                    <div className='Students'>
                        { this.state.students.map((student, index) => {
                            return (
                                <Student 
                                    key={index}
                                    name={student.name}
                                />
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default List