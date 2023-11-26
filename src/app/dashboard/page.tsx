import Task from '@/components/Task'
import React from 'react'

function page() {
    return (
        <>

            <div className='text-gray-700  ml-9 pt-5'>
                <h1><b>All Tasks</b></h1>
            </div>
            <Task data={{id: 1}} />


        </>

    )
}

export default page