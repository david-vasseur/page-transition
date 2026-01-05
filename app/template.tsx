import React, { ReactNode } from 'react'
import Transition from './components/pages/Transition'

function template({ children }: {children: React.ReactNode}) {

    return (
        <div>
            <Transition />
            {children}
        </div>
    )
}

export default template;