import { useState, useRef } from "react";
import hitToast from "../helpers/hitToast";

export default function SubscriptionForm() {
  let [email, setEmail] = useState("");
  let [alertClass, setAlertClass] = useState("");
  var parentComp = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate(email)) {
      setAlertClass("alert-validate");
      return;
    }

    try {
      const res = await fetch("http://103.108.146.90:5000/sendemail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      console.log(res);
      const data = await res.json();
      console.log(data)
      hitToast(data.message, data.success ? "success" : "error");
    } catch (error) {
      hitToast("Something went wrong. Please try again.", error);
      console.log(error);
    }
  };

  const validate = (email) => {
    const emailRegex =
      /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/;
    return email.trim().match(emailRegex) !== null;
  };

  return (
    <form
      className="w-full flex-w flex-c-m validate-form"
      onSubmit={handleSubmit}
    >
      <div
        ref={parentComp}
        className={"wrap-input100 validate-input where1 " + alertClass}
        data-validate="Valid email is required: user@email.domain"
      >
        <input
          className="input100 placeholder0 s2-txt2"
          type="text"
          name="email"
          placeholder="Enter Email Address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="focus-input100"></span>
      </div>

      <button className="flex-c-m size3 s2-txt3 how-btn1 trans-04 where1">
        Subscribe
      </button>
    </form>
  );
}
