import React from 'react'
import {RiTwitterXLine,RiThreadsLine,RiInstagramLine} from '@remixicon/react'

const Card = ({props}) => {
  const { name, bio, cover, profile, likeCount, postCount, viewCount } = props

  return (
    <div className="w-80 rounded-[32px] bg-white p-3 shadow-xl border border-gray-100 font-sans">
      {/* Cover Image Header */}
      <div className="relative h-44 w-full overflow-hidden rounded-[24px]">
        <img
          src={cover}
          alt="Cover"
          className="h-full w-full object-cover"
        />
        {/* Plus Button */}
        <button className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 backdrop-blur-md text-gray-800 transition hover:bg-white">
          <span className="text-xl font-medium leading-none">+</span>
        </button>
      </div>

      {/* Profile Avatar (Overlapping cover image) */}
      <div className="-mt-14 flex justify-center">
        <div className="relative rounded-full p-1 bg-gradient-to-tr from-amber-400 via-rose-500 to-indigo-600">
          <div className="rounded-full bg-white p-0.5">
            <img
              src={profile}
              className="h-24 w-24 rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className="mt-3 text-center px-4">
        <h2 className="text-xl font-bold text-gray-900">{name}</h2>
        <p className="mt-1 text-xs text-gray-500 leading-relaxed">
          {bio}
        </p>
      </div>

      {/* Stats Box */}
      <div className="mt-5 rounded-2xl bg-gray-50/80 p-4 border border-gray-100">
        <div className="flex items-center justify-around text-center">
          <div>
            <p className="text-base font-bold text-gray-900">{likeCount}</p>
            <p className="text-xs text-gray-400 font-medium">Likes</p>
          </div>
          <div>
            <p className="text-base font-bold text-gray-900">{postCount}</p>
            <p className="text-xs text-gray-400 font-medium">Posts</p>
          </div>
          <div>
            <p className="text-base font-bold text-gray-900">{viewCount}</p>
            <p className="text-xs text-gray-400 font-medium">Views</p>
          </div>
        </div>
      </div>

      {/* Social Icons (Remix Icons) */}
      <div className="mt-5 mb-2 flex items-center justify-center gap-6 text-gray-700">
        {/* Remix Icon: Instagram */}
        <a href="#instagram" className="hover:text-gray-900 transition-colors">
          <RiInstagramLine/>
        </a>

        {/* Remix Icon: Twitter-x */}
        <a href="#x" className="hover:text-gray-900 transition-colors">
            <RiTwitterXLine/>
        </a>

        {/* Remix Icon: Threads */}
        <a href="#threads" className="hover:text-gray-900 transition-colors">
          <RiThreadsLine/>
        </a>
      </div>
    </div>
  )
}

export default Card


