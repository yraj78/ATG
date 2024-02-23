import React from 'react'

const Cover = () => {
    return (
        <div style={{ position: 'relative', width: '100%', height: '440px' }}>
            <img src='coverimg.jpg' alt='cover' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', top: '83%', left: '23.5%', transform: 'translate(-50%, -50%)', textAlign: 'left', color: 'white' }}>
                <h1>Computer Engineering</h1>
                <p>142,765 Computer Engineers follow this</p>
            </div>
        </div>
    )
}

export default Cover