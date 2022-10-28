import React from "react"
import Button from "../button/Button"
import Item from "../items/Item"
import s from './List.module.css'

const state = [
    {id:1, task: 'HTML', checked: false},
    {id:2, task: 'CSS', checked: false},
    {id:3, task: 'JavaScript', checked: false},
    {id:4, task: 'React', checked: false},
    {id:5, task: 'Vue', checked: false}
]


class List extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            elements: []
        }
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.setState({elements: state}) 
    }  


    handleCheck = ({id, task, checked}) => {
            const time = new Date();

            console.log(`Задание '${task}'  было выполнено ${time.toLocaleTimeString()}`)

            const elems = this.state.elements.map(item => item.id === id ? {...item, checked: !checked} : item)
            this.setState({elements: elems})
        }

    handleClick(){
        let count = 0;
        this.state.elements.map(item => item.checked && count++);
        console.log(`Выполнено ${count} заданий`)
    }
    
   

    render() {
        const { elements } = this.state;
        return (
            <div className={s.list}>
                <h1 className={s.nameList}>ToDo list</h1>
                <div className={s.items}>
                    
                    {elements.map(item => (
                    <Item task = {item.task} key={item.id} handleCheck = {this.handleCheck}>
                    {item}
                    </Item>
                    ))}
                </div>
                <div>
                    <Button handleClick = {this.handleClick}/>
                </div>
            </div>
        )
    }
      

    
} 

export default List