import { GoChevronRight } from "react-icons/go";
import { useNavigate } from "react-router";
import { PiHandsClappingLight } from "react-icons/pi";
import { MdBookmarkBorder } from "react-icons/md";
import { BsChat } from "react-icons/bs";

import { useState } from "react";

function ArticlesPage() {
  const [chatCount, setChatCount] = useState(0);
  const [saveCount, setSaveCount] = useState(0);
  const [clapCount, setClapCount] = useState(0);

  const navigate = useNavigate();

  const handleClapCount = () => {
    setClapCount(clapCount + 1);
  }

  const handleChatCount = () => {
    setChatCount(chatCount + 1);
  }

  const handleSaveCout = () => {
    setSaveCount(saveCount + 1);
  }

  const handleClick = () => {
    navigate('/headline1')
  }

  return(
    <div className="bg-gray-100 h-screen">
      <div className="mx-auto h-screen max-w-5xl px-28 items-center bg-white">
        <p className="font-bold text-5xl py-10">Exploring Coding, Personal Growth, and Entrepreneurship</p>
        <p className="font-light pb-10">Dive into my journey of learning to code, personal development, traveling, and entrepreneurship, with each article offering AI-generated summaries of my video content, organized chronologically for easy navigation.</p>
        <div className="flex justify-between">
          <div className="text-gray-300">
            <p className="text-gray-400 mt-4">March 12, 2024</p>
          </div>
          <div className="flex flex-col">
            <div onClick={handleClick} className="p-4 cursor-pointer hover:bg-gray-100 rounded-lg">
              <p className="font-bold mb-3">How to NOT Be Broke in Your 20s</p>
              <p className="max-w-xl  text-sm text-gray-500">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
              <div className="flex items-center my-2 text-teal-500">
                <button>Read article</button>
                <GoChevronRight />
              </div>
            </div>
            <div className="flex my-10">
              <div title='clap' onClick={handleClapCount} className="flex mr-8">
                <PiHandsClappingLight size={25} className="ml-4 cursor-pointer mr-2 text-teal-500" />
                {clapCount}
              </div>
              <div title="respond" onClick={handleChatCount} className="flex mr-8">
                <BsChat size={25} className="text-teal-500 cursor-pointer mr-2 ml-4" />
                {chatCount}
              </div>
              <div title="save" onClick={handleSaveCout} className="flex">
                <MdBookmarkBorder size={25} className="text-teal-500 cursor-pointer mr-2 ml-4" />
                {saveCount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticlesPage;