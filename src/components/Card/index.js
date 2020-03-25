import React, {useRef, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import BoardContext from '../Board/context';
import { Container, Label }  from './styles';


import { MdAdd }  from 'react-icons/md';


export default function Card( { data, index, listIndex }){

const ref = useRef();
const { move } = useContext(BoardContext);

const [{ isDragging}, dragRef] = useDrag({
item:  { type: 'CARD',index, id:data.id, content:data.content,listIndex },
collect: monitor =>({
   isDragging:monitor.isDragging(),
}),
});

const [, dropRef] = useDrop({
accept: 'CARD',
hover(item, monitor){
    
    const draggedListIndex = item.listIndex;
    const targetListIndex = listIndex;
    const draggedIndex = item.index;
    const targetIndex = index;
    console.log(item.index);
    console.log(index);

    if(draggedIndex == targetIndex  && draggedListIndex == targetListIndex){
            return;
    }
    const targetSize = ref.current.getBoundingClientRect();
    const targetCenter = (targetSize.Bottom - targetSize.top) /2;
    const draggedOffset = monitor.getClientOffset();
    const draggedTop = draggedOffset.y - targetSize.top;

    if(draggedIndex < targetIndex && draggedTop < targetCenter){
        return;
    }

    if(draggedIndex > targetIndex && draggedTop > targetCenter){
        return;
    }

    move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);
    item.index = targetIndex;
    item.listIndex = targetListIndex;
}
})

dragRef(dropRef(ref));

    return (
        <Container ref={ref} isDragging={isDragging}>
            <header>           
                { data.labels.map(label => <Label key={label} color={label}/>)}
            </header>
            <p> { data.content } </p>
            <img src={data.user} />
            
        </Container>
       
    );
}