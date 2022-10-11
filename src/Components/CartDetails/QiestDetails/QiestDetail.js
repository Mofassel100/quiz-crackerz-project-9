import React from 'react';
import { Placeholder } from 'react-bootstrap';
import QieOption from './QueOption/QieOption';

const QiestDetail = ({allQiestion}) => {
    const {correctAnswer,id ,options,question}
    =allQiestion
//     let quest 
//     console.log(quest)

//     for (const quesOpion of options){
//         const quesOpionsAll = quesOpion;
// quest.push(quesOpionsAll);
//     }
    return (
        <div>
            <p className='text-2xl text-lime-400'>{question}</p>
            <div>
            {options.map(op=><QieOption op={op}></QieOption>)}
            </div>
            
            
        </div>
    );
};

export default QiestDetail;