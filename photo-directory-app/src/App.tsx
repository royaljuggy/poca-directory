import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import FilterPanel from './components/FilterPanel';
import PhotoCard from './components/PhotoCard';
import photosData from './data/photos';

const App: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filterCriteria, setFilterCriteria] = useState<string | null>(null);

    const images = require.context('./photos');
    const photoList = images.keys().map((filename : string, idx : number) => ({
        id: idx,
        title: filename.replace('./', ''),
        src: images(filename),
    }));

    const filteredPhotos = photosData.filter(photo => {
        const matchesSearch = photo.title.toLowerCase().includes(searchQuery.toLowerCase());
        // const matchesFilter = filterCriteria ? photo.category === filterCriteria : true;
        return matchesSearch /*&& matchesFilter*/;
    });

    return (
        <div>
            <h1>Photo Directory</h1>
            {/* <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
            <FilterPanel setFilterCriteria={setFilterCriteria} /> */}
            <div className="photo-grid">
                {filteredPhotos.map(photo => (
                    <PhotoCard key={photo.id} photo={photo} />
                ))}
            </div>
        </div>
    );
};

export default App;