import React, { useContext, } from 'react';
import { QuizContext } from '../Main/Main';
// import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
  
} from 'recharts';

const Statics = () => {

    const data = useContext(QuizContext)

    return (
        <div className='w-[100%] h-[100%] mt-8'>
           
            {/* <ResponsiveContainer width="100%" height="100%"> */}
                <ComposedChart
                    width={400}
                    height={400}
                    data={data.data}
                    margin={{
                        top: 40,
                        right: 30,
                        bottom: 20,
                        left: 20,
                    }}
                >
                    <CartesianGrid stroke="#f5f5f5" />
                    <XAxis dataKey="name" scale="band" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Area type="monotone" dataKey="total" fill="#8884d8" stroke="#8884d8" />
                    <Bar dataKey="total" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="" stroke="#ff7300" />
                    <Scatter dataKey="total" fill="red" />
                </ComposedChart>
            {/* </ResponsiveContainer> */}





        </div>
    );
};

export default Statics;