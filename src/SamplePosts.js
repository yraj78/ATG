import React from 'react'

const SamplePosts = () => {
    return (
        <>
            <div class="post">
                <div class="post-image">
                    <img style={{ height: '220px' }} src="Rectangle 5.png" alt="Post1" />
                </div>
                <div style={{ padding: '1.5rem' }} class="post-info">
                    <h3>✍Article</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h3 style={{ fontSize: '1.5rem', marginRight: '80px' }} class="post-title">What if famous brands had regular fonts? Meet<br /> RegulaBrands!</h3>
                        <button style={{ border: 'none', background: 'none' }} class="dropdown-btn">&#8226;&#8226;&#8226;</button>
                        <div class="dropdown-content">
                           
                        </div>
                    </div>
                    <p class="post-description">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                    <div class="post-details">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '2' }} class="post-owner">
                            <img class="rounded-circle" alt="Profile" src="dp.jpg" width="48" height="48" />Yash Chaturvedi
                        </div>
                        <div class="post-stats">
                            <div class="views">
                                <i className="far fa-eye"></i> 1.4k views
                            </div>
                            <button style={{ border: 'none' }} class="share-btn"><img alt='share' src='share.svg' /></button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="post">
                <div class="post-image">
                    <img style={{ height: '220px' }} src="Rectangle 5 (1).png" alt="Post1" />
                </div>
                <div style={{ padding: '1.5rem' }} class="post-info">
                    <h3>📝Education</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h3 style={{ fontSize: '1.5rem', marginRight: '80px' }} class="post-title">Tax Benefits for Investment under National<br /> Pension Scheme launched by Government</h3>
                        <button style={{ border: 'none', background: 'none' }} class="dropdown-btn">&#8226;&#8226;&#8226;</button>
                        <div class="dropdown-content">
                            
                        </div>
                    </div>
                    <p class="post-description">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</p>
                    <div class="post-details">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '2' }} class="post-owner">
                            <img class="rounded-circle" alt="Profile" src="dp.jpg" width="48" height="48" />Yash Chaturvedi
                        </div>
                        <div class="post-stats">
                            <div class="views">
                                <i className="far fa-eye"></i> 1.4k views
                            </div>
                            <button style={{ border: 'none' }} class="share-btn"><img alt='share' src='share.svg' /></button>
                        </div>
                    </div>
                </div>
            </div>



            <div class="post">
                <div class="post-image">
                    <img style={{ height: '220px' }} src="Rectangle 5 (2).png" alt="Post1" />
                </div>
                <div style={{ padding: '1.5rem' }} class="post-info">
                    <h3>📅Meetup</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h3 style={{ fontSize: '1.5rem', marginRight: '80px' }} class="post-title">Finance & Investment Elite Social Mixer @Lujiazui</h3>
                        <button style={{ border: 'none', background: 'none' }} class="dropdown-btn">&#8226;&#8226;&#8226;</button>
                        <div class="dropdown-content">
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'left', gap: '2rem' }}>
                        <div>
                            <p><i class="fas fa-calendar-alt"></i>  Fri, 12 Oct, 2018</p>
                        </div>

                        <div>
                            <p> <i class="fas fa-map-marker-alt"></i>  Ahmedabad, India</p>
                        </div>
                    </div>
                    <button style={{ color: 'orange', border: '1px solid black', background: 'transparent', width: '40rem', height: '2.5rem', textAlign: 'center', borderRadius: '10px' }}>Visit WebSite</button>
                    <div class="post-details">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '2' }} class="post-owner">
                            <img class="rounded-circle" alt="Profile" src="dp.jpg" width="48" height="48" />Yash Chaturvedi
                        </div>
                        <div class="post-stats">
                            <div class="views">
                                <i className="far fa-eye"></i> 1.4k views
                            </div>
                            <button style={{ border: 'none' }} class="share-btn"><img alt='share' src='share.svg' /></button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="post">
                <div style={{ padding: '1.5rem' }} class="post-info">
                    <h3>💼Job</h3>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h3 style={{ fontSize: '1.5rem', marginRight: '80px' }} class="post-title">Software Developer</h3>
                        <button style={{ border: 'none', background: 'none' }} class="dropdown-btn">&#8226;&#8226;&#8226;</button>
                        <div class="dropdown-content">
                        </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'left', gap: '2rem' }}>
                        <div>
                            <p><i class="fas fa-shopping-bag"></i>  Innovaccer Analytics Private Ltd.</p>
                        </div>

                        <div>
                            <p> <i class="fas fa-map-marker-alt"></i>  Noida, India</p>
                        </div>
                    </div>
                    <button className='post-btn' style={{ color: 'green', border: '1px solid black', background: 'transparent', width: '40rem', height: '2.5rem', textAlign: 'center', borderRadius: '10px' }}>Apply on Timejobs</button>
                    <div class="post-details">
                        <div style={{ display: 'flex', alignItems: 'center', gap: '2' }} class="post-owner">
                            <img class="rounded-circle" alt="Profile" src="dp.jpg" width="48" height="48" />Yash Chaturvedi
                        </div>
                        <div class="post-stats">
                            <div class="views">
                                <i className="far fa-eye"></i> 1.4k views
                            </div>
                            <button style={{ border: 'none' }} class="share-btn"><img alt='share' src='share.svg' /></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SamplePosts