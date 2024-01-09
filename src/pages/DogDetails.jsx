import { useParams, Link, Outlet } from 'react-router-dom';

const DogDetails = () => {
  const { dogId } = useParams();
  //   console.log(dogId);

  //     useEffect(()=>{
  // HTTP запрос, якщо потрібно
  //     },[])

  return (
    <>
      <h1>DogDetails: {dogId}</h1>
      <ul>
        <li>
          <Link to="subbreeds">Subbreeds</Link>
        </li>
        <li>
          <Link to="gallery">Gallery</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
export default DogDetails;
