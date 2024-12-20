import React, { useContext } from 'react';
import imageOne from "./fims-Pictures/imageOne.jpg";
import imageTwo from "./fims-Pictures/imageTwo.jpg";
import imageThree from "./fims-Pictures/imageThree.jpg";
import imageFour from "./fims-Pictures/imageFour.jpg";
import imageFive from "./fims-Pictures/imageFive.jpg";
import imageSix from "./fims-Pictures/imageSix.jpg";
import imageSeven from "./fims-Pictures/imageSeven.jpg";
import imageEight from "./fims-Pictures/imageEight.jpg";
import { MoviesContext } from './MovieContext';

function Home() {
    const movies = [
        { img: imageOne, id: 1, title: "kahaniya", genre: "sci-fi", year: 2000 },
        { img: imageTwo, id: 2, title: "Soldier", genre: "Action", year: 2010 },
        { img: imageThree, id: 3, title: "Teefa", genre: "Action", year: 2006 },
        { img: imageFour, id: 4, title: "Punjabi", genre: "Comedy", year: 2007 },
        { img: imageFive, id: 5, title: "M-B-G", genre: "Action", year: 2010 },
        { img: imageSix, id: 6, title: "Ghabrana nahi", genre: "Comedy", year: 2012 },
        { img: imageSeven, id: 7, title: "Ramchand Pakistani", genre: "History", year: 2010 },
        { img: imageEight, id: 8, title: "DAGhabaz", genre: "Comedy", year: 2009 },
    ];

    const { favorite, setFavorite } = useContext(MoviesContext);

    return (
        <div className='p-10 m-0 mt-14 ml-16'>
            <ul className='grid grid-cols-4 gap-x-4 gap-y-4'>
                {movies.map((item) => (
                    <li key={item.id}>
                        <div className='border border-black max-w-[200px] bg-gray-700 rounded-lg text-white'>
                            <img src={item.img} alt="fim-pic" className='h-40 rounded-lg w-full' />
                            <ul>
                                <li><span className='text-yellow-300'>Title:</span> {item.title}</li>
                                <li><span className='text-yellow-300'>Genre:</span> {item.genre}</li>
                                <li><span className='text-yellow-300'>Year:</span> {item.year}</li>
                                <button
                                    onClick={() => {
                                        // Check if the item is already in the favorite list
                                        if (!favorite.find((favItem) => favItem.id === item.id)) {
                                            // Add to favorite if it's not already there
                                            setFavorite([...favorite, item]);
                                        }
                                    }}
                                    className='border border-black rounded-lg p-2 bg-orange-600 hover:bg-orange-700 hover:px-6'
                                >
                                    Add to Favorite
                                </button>
                            </ul>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
