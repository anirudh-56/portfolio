import {useEffect, useState, useRef} from 'react';

import './Profile.css'

const Profile = () => {
        const MyLinkButton = ({ href, children, variant = "btn-primary" }) => {
        return (
            <a href={href}>
            <button className={"btn " + variant}>{children}</button>
            </a>
        );
    }


    return(
        <div className = "Profile" id = "Home">
            <div className = "left">
                <h2>Hello, I’m Anirudh! I like to design and build things, especially software!</h2>

                <p>
                    I started off building Android Apps in middle school, but I've always been drawn to building and creating things, from puzzles, sketches, storyboards, and systems. 
                </p>

                <p>
                    That passion for merging my curiosity and creativity carried me into majoring in Computer Science where I now build full-stack systems and enjoy helping students learn how to design software. 
                </p>

                <p>
                    I’ve worked in both industry and academic settings, where I've been able to collaborate with teams across research, engineering, and teaching.
                </p>

                <p>
                    When I'm not coding, you can find me either at a movie theater, sketching, or reading!
                </p>

                <div className = "buttons">
                    <MyLinkButton href="https://www.linkedin.com/in/anirudh-yallapragada/" variant="btn-primary">
                        Linkedin
                    </MyLinkButton>

                    <MyLinkButton href="https://github.com/anirudh-56" variant="btn-secondary">
                        Github
                    </MyLinkButton>

                    <MyLinkButton href="/AnirudhYallapragadaResume.pdf" variant="btn-secondary">
                        Download Resume
                    </MyLinkButton>
                </div>
            </div>

            <div className = "right">
                <img src="/images/profileImage.jpg" alt="Profile" /> 
            </div>
      
        </div>
    );
}

export default Profile;