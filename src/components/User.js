import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import Navbar from "./Navbar";
import {
  allUserAction,
  femaleUserAction,
  maleUserAction,
} from "./store/Actions";

const User = () => {
  const data = useSelector((state) => state.userReducer);

  const dispatch = useDispatch();
  const [allUser, setAllUser] = useState([]);
  const [loads, setLoads] = useState(true);

  //for default all users
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=500")
      .then((res) => res.json())
      .then((data) => {
        setAllUser(data.results);
        setLoads(false);
        dispatch(allUserAction({ type: "ALL", payload: data.results }));
      });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Navbar />
      <div className="container p-2">
        <div>
          <h1>User Details</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut nihil
            tempora cupiditate omnis iusto modi? Esse quibusdam atque, adipisci
            nihil earum cumque laborum repellat, porro maxime consequuntur
            provident quidem natus? Ducimus magni inventore quod! Odit
            reprehenderit voluptate rem autem explicabo pariatur facere sapiente
            rerum laboriosam ut veniam maiores veritatis aut repudiandae
            voluptates placeat quod molestiae ratione quia, alias labore nobis
            non facilis quibusdam! Nam rem odio excepturi eligendi sunt fugit
            itaque, eveniet tempora. Obcaecati deleniti totam rerum fugit
            perspiciatis voluptates voluptas? Perferendis, et odit ullam
            perspiciatis quaerat odio sit amet consectetur tempore est itaque
            obcaecati sapiente molestiae fugit placeat veniam.
          </p>
        </div>

        <div className="d-flex mt-5">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="option1"
              onClick={() =>
                dispatch(allUserAction({ type: "ALL", payload: allUser }))
              }
            />
            <label className="form-check-label" htmlFor="inlineRadio1">
              All
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="option2"
              onClick={() =>
                dispatch(maleUserAction({ type: "MALE", payload: allUser }))
              }
            />
            <label className="form-check-label" htmlFor="inlineRadio2">
              Male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio3"
              value="option3"
              onClick={() =>
                dispatch(femaleUserAction({ type: "FEMALE", payload: allUser }))
              }
            />
            <label className="form-check-label" htmlFor="inlineRadio3">
              Female
            </label>
          </div>
        </div>

        {loads ? (
          <Loading />
        ) : (
          <div className="col-12 mt-3 table-div">
            <table className="table">
              <thead>
                <tr className="table-dark">
                  <th scope="col">Image</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Gender</th>
                </tr>
              </thead>
              <tbody>
                {data.length > 0 &&
                  data.map((item, ind) => {
                    return (
                      <tr key={ind}>
                        <td>
                          <img
                            src={item.picture.thumbnail}
                            alt={item.name.first}
                          />
                        </td>
                        <td>{item.name.first}</td>
                        <td>{item.email}</td>
                        <td>{item.gender}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </>
  );
};

export default User;
