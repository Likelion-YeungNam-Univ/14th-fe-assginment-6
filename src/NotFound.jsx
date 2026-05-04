import { useNavigate } from "react-router-dom";
import image from "/src/images/404.jpeg";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-[#fff0f0] h-screen flex flex-col items-center justify-center">
            <h1 className="padding-4  rounded-full text-9xl font-black text-black select-none">404</h1>
            <div>
                <h2 className="flex justify-center text-3xl md:text-4xl font-bold text-slate-800 mb-3">
                    페이지를 찾을 수 없습니다.
                </h2>
            </div>
            <div className="relative inline-block">
                <img
                    src={image}
                    alt="404"
                    onClick={() => navigate(-1)}
                    className="mt-4 rounded-full cursor-pointer
                    shadow-2xl shadow-pink-200 transition-all transform hover:-translate-y-3"
                />

                {/* 말풍선 */}
                <div className=" absolute top-1/4 left-full ml-0
                -translate-y-1/2
                px-10 py-8 bg-yellow-300 text-gray text-[20px] font-light rounded-full whitespace-nowrap cursor-pointer">
                    돌아갈래 ㅜㅜ

                    {/* 꼬리 */}
                    <div className= "absolute top-1/2 -left-10 -translate-y-1/2 w-0 h-0 border-t-[20px] border-b-[20px] border-r-[50px] border-solid border-t-transparent border-b-transparent border-r-yellow-300"/>
                    </div>
                </div>
            </div>
    );
};

export default NotFound;