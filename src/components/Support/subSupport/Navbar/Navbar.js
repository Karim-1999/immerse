import './style.css'
import { useNavigate } from 'react-router-dom';
import { CardButton, ContactNav } from '../Home/button-chat/CardButton';

export function Navbar() {
    const navigate = useNavigate();
    return (
        <>
            <header className='supportHeader'>
                <div className="support-navbar">
                    <a href='' onClick={()=> {navigate('/support')}}><img src="https://images-ext-1.discordapp.net/external/H64MoDxh9-Se9Z0PodOqerUfvfDAX_xayftsOp6z1SY/https/d33v4339jhl8k0.cloudfront.net/docs/assets/62153a3a9b67d27cdbb5d6f0/images/6297dd5792cb8c175b469001/immerse-logo.png" alt="immerse logo"
                        className="support-immerse-logo"/></a>
                    <i className="fa-solid fa-bars"></i>
                    <div className="nav-links-tablet">
                        <a href='' className="supp-nav-link" onClick={()=> {navigate('/support/general-qn')}} name='generalQuestions' >General Questions</a>
                        <a href='' className="supp-nav-link" onClick={()=>{navigate('/support/my-membership')}} name='myMembership'>My Membership</a>
                        <a href='' className="supp-nav-link" onClick={()=>{navigate('/support/feedback')}} name='feedback'>Troubleshooting & Feedback</a>
                        <a className="supp-nav-link nav-open-card" onClick={ContactNav}>Contact</a>
                    </div>
                </div>
                <div className="nav-links-mobile">
                    <a href="" className="supp-nav-link" onClick={()=> {navigate('/support/general-qn')}}>General Questions</a>
                    <a href="" className="supp-nav-link" onClick={()=>{navigate('/support/my-membership')}}>My Membership</a>
                    <a href="" className="supp-nav-link" onClick={()=>{navigate('/support/feedback')}}>Troubleshooting & Feedback</a>
                    <a className="supp-nav-link nav-open-card" onClick={ContactNav}>Contact</a>
                </div>
            </header>
        </>
    )
}