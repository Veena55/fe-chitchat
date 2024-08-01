import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { userProfile } from "./redux/actions";

export const fetchUserProfile = async () => {
  const { data } = await axios.get('/user/profile');
  return data;
}

function App() {
  const dispatch = useDispatch();
  const { data } = useQuery({
    queryKey: ['fetch_profile'],
    queryFn: fetchUserProfile
  });
  useEffect(() => {
    if (data) {
      dispatch(userProfile(data));
    }
  }, [data]);
}


export default App
