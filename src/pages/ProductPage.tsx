import { useState, useEffect } from "react";
import { Nav } from "../components/NavBlack/Nav";
import { Footer } from "../components/Footer/Footer";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";


const ProductPage = () => {
  const location: any = useLocation();
  // const params: any = useParams();
  const [data, setData] = useState(location.state);
  const dispatch = useDispatch();

  /*useEffect(() => {
    if (!location.state) {
      dispatch(actionGetHotelRequested());
      // fetch(`https://fe-student-api.herokuapp.com/api/hotels${params.id}`).then(
      //   (response) => response.json().then((data) => setData(data))
      // );
      setData(data);
    }
  }, [location.state, dispatch, data]);*/
  return (
    < >
    <Nav/>
    <section>
    </section>
    <Footer/>

    </>
  )
}

export default ProductPage