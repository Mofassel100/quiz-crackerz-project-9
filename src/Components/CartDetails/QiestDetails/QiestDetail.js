
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const QiestDetail = ({ allQiestion, name }) => {
    const { correctAnswer, id, options, question }
        = allQiestion
    const copareQueSole = (qOption) => {
        const AllOption = qOption;
        if (AllOption === correctAnswer) {
            toast.success('Correct answer !', { position: toast.POSITION.TOP_CENTER })
        }
        else {
            toast.error('Wrong answer !', { position: toast.POSITION.TOP_CENTER })
        }
    }
    return (
        <div className='border m-4 rounded bg-teal-400'>
            <p className='text-2xl text-blue-700 p-4'>{question}</p>
            <div className='text-red-500 grid md:grid-cols-3 lg:grid-cols-4 gap-3 m-5'>
                {options.map((qOption) =>
                    <div className='bg-slate-100  border rounded m-2 p-2 grid justify-start justify-self-start gap-3 min-w-full '>   <input type="radio"
                        name={id}
                        onClick={() => copareQueSole(qOption)
                        }
                        className="radio  radio-primary" />
                        <p className=''>{qOption}</p></div>)}
            </div>
            <ToastContainer />
        </div>
    );
};

export default QiestDetail;