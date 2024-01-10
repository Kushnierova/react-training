import { useRef } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';

const DogDetails = () => {
  const { dogId } = useParams();
  const location = useLocation();
  //   const backLinkHref = location.state?.from ?? '/dogs';
  const backLinkLocationRef = useRef(location.state?.from ?? '/dogs');
  //   location.state?.from це те саме що location.state && location.state?.from
  //   console.log(dogId);

  //     useEffect(()=>{
  // HTTP запрос, якщо потрібно
  //     },[])

  return (
    <div>
      <h1>DogDetails: {dogId}</h1>
      <button>
        <Link to={backLinkLocationRef.current}>Back to Dogs</Link>
      </button>

      <ul>
        <li>
          <Link to="subbreeds">Subbreeds</Link>
        </li>
        <li>
          <Link to="gallery">Gallery</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
export default DogDetails;
