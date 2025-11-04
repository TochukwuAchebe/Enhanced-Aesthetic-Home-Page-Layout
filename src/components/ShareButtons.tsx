import React, { Component } from 'react';
interface ShareButtonsProps {
  title: string;
  url?: string;
}
export function ShareButtons({
  title,
  url
}: ShareButtonsProps) {
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  return <div className="border-t border-gray-200 pt-8 mt-12">
      <h3 className="text-xl font-bold text-blue-900 mb-4">
        Share this article
      </h3>
      <div className="flex space-x-4">
        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer" className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors">
          Share on LinkedIn
        </a>
        <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(title)}`} target="_blank" rel="noopener noreferrer" className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors">
          Share on Twitter
        </a>
        <button onClick={() => {
        navigator.clipboard.writeText(shareUrl);
        alert('Link copied to clipboard!');
      }} className="border border-blue-900 text-blue-900 px-4 py-2 rounded-md hover:bg-blue-50 transition-colors">
          Copy Link
        </button>
      </div>
    </div>;
}