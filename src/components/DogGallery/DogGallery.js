import { useParams } from 'react-router-dom';

const Gallery = () => {
  const { dogId } = useParams();
  return <div>Image Gallery for {dogId}</div>;
};

export default Gallery;
