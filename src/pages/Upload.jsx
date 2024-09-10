/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import styles from '../css/upload.module.css';
import './transition.css';

const Upload = () => {
    const [artworkType, setArtworkType] = useState('Painting');

    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        setIsOverlayVisible(true);
    }, []);

    return (
        <div className={styles.uploadPage}>
            <div className={`overlay ${isOverlayVisible ? '' : 'show'}`}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className="w-[80%] h-2/12 p-10 bg-neutral-800 rounded-xl shadow-lg max-md:w-[95%]">
                <h2 className="text-2xl font-bold text-white text-center mb-6">UPLOAD YOUR WORKS</h2>
                <p className="text-lg text-gray-300 text-center mb-6">Art is not what you see, but what you make others see</p>
                <form onSubmit={handleSubmit} className="md:gap-5 grid max-md:grid-cols-1 grid-cols-2">
                    <div className='max-md:col-span-2'>
                        <label className="block text-sm font-medium text-gray-300">Name</label>
                        <input type="text" required className="mt-2 block w-full p-2 bg-neutral-600 text-white rounded-md focus:outline-none focus:border-yellow-500 placeholder:italic placeholder:font-normal placeholder:text-neutral-400" placeholder="What would you like this artwork to be known as?" />
                    </div>
                    <div className='max-md:col-span-2'>
                        <label className="block text-sm font-medium text-gray-300">Author</label>
                        <input type="text" required className="mt-2 block w-full p-2 bg-neutral-600 text-white rounded-md focus:outline-none focus:border-yellow-500 placeholder:italic placeholder:font-normal placeholder:text-neutral-400" placeholder="Who is the creative mind behind this piece?" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-300">Date Released</label>
                        <input type="text" required className="mt-2 block w-full p-2 bg-neutral-600 text-white rounded-md focus:outline-none focus:border-yellow-500 placeholder:italic placeholder:font-normal placeholder:text-neutral-400" placeholder="When was this masterpiece unveiled?" />
                    </div>
                    <div className='max-md:col-span-2'>
                        <label className="block text-sm font-medium text-gray-300">Classification</label>
                        <input type="text" required className="mt-2 block w-full p-2 bg-neutral-600 text-white rounded-md focus:outline-none focus:border-yellow-500 placeholder:italic placeholder:font-normal placeholder:text-neutral-400" placeholder="How would you categorize this work?" />
                    </div>
                    <div className='max-md:col-span-2'>
                        <label className="block text-sm font-medium text-gray-300">Type of Art</label>
                        <select
                            value={artworkType}
                            onChange={(e) => setArtworkType(e.target.value)}
                            className="mt-2 block w-full p-2 h-12 bg-neutral-600 text-white rounded-md focus:outline-none focus:border-yellow-500 placeholder:italic placeholder:font-normal placeholder:text-neutral-400"
                        >
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
                            className="mt-2 block w-full p-2 h-12 bg-neutral-600 text-white rounded-md focus:outline-none focus:border-yellow-500 placeholder:italic placeholder:font-normal placeholder:text-neutral-400"
                        />
                    </div>

                    <div className='md:col-span-2'>
                        <label className="block text-sm font-medium text-gray-300">Description</label>
                        <textarea required className="mt-2 block w-full p-2 bg-neutral-600 text-white rounded-md focus:outline-none focus:border-yellow-500 placeholder:italic placeholder:font-normal placeholder:text-neutral-400" placeholder="Tell us the story behind this creation. What inspired it?"></textarea>
                    </div>
                    <button type="submit" className="w-full py-2 px-4 bg-yellow-500 col-span-2 text-white font-semibold rounded-md shadow-lg shadow-yellow-500 hover:outline-none  focus:outline-none">
                        Upload
                    </button>
                </form>
            </div>
        </div>

    );
};

export default Upload;