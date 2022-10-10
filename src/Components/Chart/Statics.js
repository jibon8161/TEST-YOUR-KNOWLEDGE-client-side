import React, { useContext } from 'react';
import { QuizContext } from '../Main/Main';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, } from 'recharts';

const Statics = () => {

    const data = useContext(QuizContext)
  
    return (
        <div>
            <div>
            <div width="100%" height="100%">
                <AreaChart className='ml-28 mt-8'
                    width={1100}
                    height={600}
                    data={data.data}
                    margin={{
                        top: 15,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />

                    <Area type="monotone" dataKey="total" stroke="#8884d8" fill="url(#splitColor)" />
                </AreaChart>
                </div>
            </div>
        </div>
    );
};

export default Statics;