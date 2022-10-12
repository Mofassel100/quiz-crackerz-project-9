
import React from 'react';
import { toast } from 'react-toastify';


const QiestDetail = ({allQiestion,name}) => {

    
    const {correctAnswer,id ,options,question}
    =allQiestion
    const copareQueSole= (props)=>{
        const AllOption= props;
        if(AllOption ===correctAnswer){      
        }
        else{
          
        }


    }
    

    return (
        <div className='border m-4 rounded bg-teal-400'>
            <p className='text-2xl text-blue-700 p-4'>{question}</p>
            <div className='text-red-500 grid md:grid-cols-3 lg:grid-cols-4 gap-3 m-5'>
            {options.map((op)=>
            <div className='bg-slate-100  border rounded m-2 p-2 grid justify-start justify-self-start gap-3 min-w-full '>   <input type="radio" 
             name={id}
             onCl
             
             onClick={()=>copareQueSole(op)
            }
             className="radio  radio-primary" />
            
             <p className=''>{op}</p></div>)}
            </div>
            
            
            
        </div>
    );
};


export default QiestDetail;