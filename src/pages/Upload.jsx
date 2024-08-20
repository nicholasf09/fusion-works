import React, { useState } from 'react';
import '../css/upload.css';

const Upload = () => {
    const [artworkType, setArtworkType] = useState('Painting');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Artwork uploaded successfully!');
        // Handle client-side upload logic here
    };

    return (
        <div className="w-xl mx-auto m-20 p-8 bg-neutral-800 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white text-center mb-6">UPLOAD YOUR WORKS</h2>
            <p className="text-lg text-gray-300 text-center mb-6">Art is not what you see, but what you make others see. - Edgar Degas</p>
            <form onSubmit={handleSubmit} className="md:gap-5 grid max-md:grid-cols-1 grid-cols-2">
                <div className='max-md:col-span-2'>
                    <label className="block text-sm font-medium text-gray-300">Name</label>
                    <input type="text" required className="m-2 block w-full p-2 bg-neutral-600 text-white rounded-md focus:ring-yellow-500 focus:border-yellow-500 placeholder:italic placeholder:text-neutral-400" placeholder="What would you like this artwork to be known as?" />
                </div>
                <div className='max-md:col-span-2'>
                    <label className="block text-sm font-medium text-gray-300">Author</label>
                    <input type="text" required className="m-2 block w-full p-2 bg-neutral-600 text-white rounded-md focus:ring-yellow-500 focus:border-yellow-500 placeholder:italic placeholder:text-neutral-400" placeholder="Who is the creative mind behind this piece?" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-300">Date Released</label>
                    <input type="text" required className="m-2 block w-full p-2 bg-neutral-600 text-white rounded-md focus:ring-yellow-500 focus:border-yellow-500 placeholder:italic placeholder:text-neutral-400" placeholder="When was this masterpiece unveiled?" />
                </div>
                <div className='max-md:col-span-2'>
                    <label className="block text-sm font-medium text-gray-300">Classification</label>
                    <input type="text" required className="m-2 block w-full p-2 bg-neutral-600 text-white rounded-md focus:ring-yellow-500 focus:border-yellow-500 placeholder:italic placeholder:text-neutral-400" placeholder="How would you categorize this work?" />
                </div>
                <div className='max-md:col-span-2'>
                    <label className="block text-sm font-medium text-gray-300">Type of Art</label>
                    <select value={artworkType} onChange={(e) => setArtworkType(e.target.value)} className="m-2 block w-full p-2 bg-neutral-600 text-white rounded-md focus:ring-yellow-500 focus:border-yellow-500 placeholder:italic placeholder:text-neutral-400">
                        <option value="Painting">Painting (img)</option>
                        <option value="Statue">Statue (img)</option>
                        <option value="Poems">Poems (img)</option>
                        <option value="Publication">Publication/Book (pdf)</option>
                        <option value="Sound">Sound (mp3)</option>
                        <option value="Video">Video (mp4/link iframe YouTube)</option>
                    </select>
                </div>
                
                <div className='max-md:col-span-2'>
                    <label className="block text-sm font-medium text-gray-300">Upload File</label>
                    <input
                        type="file"
                        accept={
                            artworkType === 'Publication'
                                ? 'application/pdf'
                                : artworkType === 'Sound'
                                ? 'audio/mp3'
                                : artworkType === 'Video'
                                ? 'video/mp4, .url'
                                : 'image/*'
                        }
                        required
                        className="m-2 block w-full p-2 bg-neutral-600 text-white rounded-md focus:ring-yellow-500 focus:border-yellow-500 placeholder:italic placeholder:text-neutral-400"
                    />
                </div>
                <div className='md:col-span-2'>
                    <label className="block text-sm font-medium text-gray-300">Description</label>
                    <textarea required className="m-2 block w-full p-2 bg-neutral-600 text-white rounded-md focus:ring-yellow-500 focus:border-yellow-500 placeholder:italic placeholder:text-neutral-400" placeholder="Tell us the story behind this creation. What inspired it?"></textarea>
                </div>
                <button type="submit" className="w-full py-2 px-4 bg-yellow-500 col-span-2 text-white font-semibold rounded-md shadow-md shadow-yellow-500/50 hover:outline-none  focus:ring-yellow-500">
                    Upload
                </button>
            </form>
        </div>
    );
};

export default Upload;