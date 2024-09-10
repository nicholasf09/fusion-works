/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

const DropdownComponent = (props) => {
    const { BigTitle, BigDesc, children, uniqueId } = props;

    const [isDropdownActive, setIsDropdownActive] = useState(uniqueId === "1");

    useEffect(() => {
        const dropdown = document.getElementById(`dropdown-${uniqueId}`);
        const handleDropdownClick = () => {
            setIsDropdownActive(!isDropdownActive);
        };

        if (dropdown) {
            dropdown.addEventListener('click', handleDropdownClick);
        }

        return () => {
            if (dropdown) {
                dropdown.removeEventListener('click', handleDropdownClick);
            }
        };
    }, [isDropdownActive, uniqueId]);

    useEffect(() => {
        const collections = document.getElementById(`collections-${uniqueId}`);
        if (collections) {
            if (isDropdownActive) {
                collections.classList.add('dropdown-active');
            } else {
                collections.classList.remove('dropdown-active');
            }
        }
    }, [isDropdownActive, uniqueId]);

    return (
        <div className="w-full h-full px-10 pb-10 text-white">
            <div className="border-b-2 flex justify-between items-center border-zinc-400">
                <h1 className="text-4xl py-5 overflow-y-hidden font-semibold text-zinc-400">{BigTitle}</h1>
                <div id={`dropdown-${uniqueId}`} className="cursor-pointer">
                    {isDropdownActive ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            className="bi bi-chevron-up"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
                            />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                        </svg>
                    )}
                </div>
            </div>
            <div id={`collections-${uniqueId}`} className="overflow-y-hidden h-0">
                <p className="mt-5 text-zinc-400">{BigDesc}</p>
                <div className="w-full h-fit grid grid-cols-2 gap-4 py-10 text-white max-md:grid-cols-1">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default DropdownComponent;