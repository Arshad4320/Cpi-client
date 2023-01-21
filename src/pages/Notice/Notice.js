import React from 'react';
import { useQuery } from 'react-query';
import NoticeData from './NoticeData';
import NoticeTitle from './NoticeTitle';

const Notice = () => {
    const { data } = useQuery("notice", () => NoticeData())
    return (
        <div className=' mx-auto p-10'>
            <h2 className='text-center text-5xl my-10 font-bold text-indigo-900'>Notice</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>

                {
                    data?.map(data => <NoticeTitle data={data} key={data._id}></NoticeTitle>)
                }

            </div>
        </div>
    );
};

export default Notice;