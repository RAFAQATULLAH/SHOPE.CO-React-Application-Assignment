
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMyProfile } from "../redux/slices/authSlice";

function AuthInitializer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMyProfile());
  }, [dispatch]);

  return null;
}

export default AuthInitializer;
