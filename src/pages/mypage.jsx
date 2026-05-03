import {Link} from 'react-router-dom';
import Profile from '../images/profile.jpeg'

const Mypage = () => {
    const username = localStorage.getItem("userName")

    if (!username) {
        return (
            <div className="w-full min-h-screen flex flex-col  justify-center items-center bg-gray-300">
                <div className="p-30 bg-white rounded-4xl border-4 border-gray-400 flex flex-col gap-15 justify-center items-center">
                    <div className="font-black text-3xl">로그인 후 이용할 수 있는 서비스입니다.</div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen flex flex-col  justify-center items-center bg-gray-300">
            <div className="p-20 bg-white rounded-4xl border-4 border-gray-400 flex flex-col gap-15 justify-center items-center">
                <div className='w-35 h-35'>
                    <img src={Profile}></img>
                </div>
                <div className="font-black text-2xl">아이디: {username}</div>
            </div>
        </div>
        
    );
}

export default Mypage;