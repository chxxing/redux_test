import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { up, change, create } from './store';

const Sub = () => {
    const { word } = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <div>
            숫자 {word}
            <button onClick={
                () => dispatch(up())
            }>숫자올리기</button>

            <button onClick={
                () => dispatch(change())
            }>
                CHANGE MODE
            </button>
            <button onClick={
                () => dispatch(create())
            }>
                값 전달하기
            </button>
        </div>
    )
}

export default Sub
