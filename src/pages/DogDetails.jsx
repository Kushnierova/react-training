import { useParams } from 'react-router-dom';

const DogDetails = () => {
  const { dogId } = useParams();
//   console.log(dogId);

  //     useEffect(()=>{
  // HTTP запрос, якщо потрібно
  //     },[])

  
  return <>DogDetails: {dogId}</>;
};
export default DogDetails;
