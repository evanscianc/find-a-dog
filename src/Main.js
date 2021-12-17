// import { useState } from "react";

export default function Main({ dogBreed, data }) {
  // const [error, setError] = useState("");
  // do grid, (DONE)make sure if the user enter gibberish, it would display not found (DONE)
  return (
    <div>
      {data ? (
        data.status === "error" ? (
          <img
            src={
              "https://st.depositphotos.com/2702761/3989/v/600/depositphotos_39898855-stock-illustration-puppy-with-404-error-message.jpg"
            }
            alt="404"
          />
        ) : (
          <img src={data.message} alt="dog" />
        )
      ) : (
        <img src={dogBreed} alt="dog" />
      )}
    </div>
  );
}
