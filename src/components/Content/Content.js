import React from 'react';

const Content = (props) => (
    <ul>
        {
            props.text.map((item, index) => {
                return <li key={index}>{item}</li>
            })
        }
    </ul>
)

export default Content;