import React, { useState } from 'react';
import SamplePosts from './SamplePosts';

const PostSection = () => {
    const [followedStates, setFollowedStates] = useState([false, false, false, false]); // Initial state for each button

    const handleFollowToggle = (index) => {
        const updatedFollowedStates = [...followedStates]; // Create a copy of the current state array
        updatedFollowedStates[index] = !updatedFollowedStates[index]; // Toggle the state of the clicked button
        setFollowedStates(updatedFollowedStates); // Update the state with the new array
    };

    return (
        <div className='posts'>
            <div className='left-section'>
                <SamplePosts />
            </div>
            <div className='right-section' style={{ border: 'none' }}>
                <span><i className="fas fa-map-marker-alt"></i></span>
                <input style={{ border: 'none', marginRight: '6rem', marginTop: '25px' }} type='text' placeholder='Enter your location' />
                <span><i className="fas fa-pen"></i></span>
                <hr />
                <span style={{ color: 'black', opacity: '.5', fontSize: '12px', fontStyle: 'normal', fontWeight: '400', lineHeight: 'normal' }}><i className="fas fa-info-circle"></i> Your location will help us serve better and <br /> &nbsp; &nbsp; extend a personalized experience.</span>
                <div style={{ paddingTop: '40px' }}>
                    <i className="fas fa-thumbs-up"></i>
                    <h4>RECOMMENDED GROUPS</h4>
                </div>

                {/* Follow/Unfollow buttons */}
                <div>
                    {followedStates.map((followed, index) => (
                        <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginTop: '22px' }}>
                            <div><img className="rounded-circle" alt="Profile" src="dp.jpg" width="48" height="48" /><span style={{ marginLeft: '20px' }}>{['Leisure', 'Activism', 'MBA', 'Philosophy'][index]}</span></div>
                            <button style={{ border: 'none', borderRadius: '10px' }} onClick={() => handleFollowToggle(index)}>{followed ? 'Unfollow' : 'Follow'}</button>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default PostSection;
