import React from 'react'
import { getSocialMedias } from '@/lib/data/socialmedia';

export default async function SocialMediaList() {
    const socialMedias = await getSocialMedias();
  return (
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {
            socialMedias.length > 0 && socialMedias.map((socialMedia, index) => (
                <span key={socialMedia.id}>
                    <a key={socialMedia.id}
                        href={socialMedia.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-600 hover:text-gray-900 hover:underline transition-all duration-200"
                    >
                        {socialMedia.platform}
                    </a>
                    {index < socialMedias.length - 1 && (
                        <span className="hidden sm:inline"> · </span>
                    )}
                </span>
            ))
        }
      </div>
    )
}
