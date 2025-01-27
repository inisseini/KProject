import React, { useRef, useState } from "react";
import { TextWithRuby } from "../../Web3D/components/TextWithRuby";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    inquiryType: "サービスの利用について",
    ageGroup: "",
    message: ""
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAgeDropdownOpen, setIsAgeDropdownOpen] = useState(false);

  const inquiryTypes = [
    { value: "サービスの利用について", label: "サービスの利用について" },
    { value: "計量について", label: "計量について" },
    { value: "その他", label: "その他" }
  ];

  const ageGroups = [
    "保護者",
    "未就学児",
    "小学校1年生",
    "小学校2年生",
    "小学校3年生",
    "小学校4年生",
    "小学校5年生",
    "小学校6年生",
    "中学校1年生",
    "中学校2年生",
    "中学校3年生",
    "高校1年生",
    "高校2年生",
    "高校3年生"
  ];

  const handleDropdownSelect = (key, value) => {
    setFormData({ ...formData, [key]: value });
    if (key === "inquiryType") setIsDropdownOpen(false);
    if (key === "ageGroup") setIsAgeDropdownOpen(false);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, confirmEmail, message } = formData;

    if (!name || !email || !confirmEmail || !message) {
      alert("空欄があります");
      return;
    }

    if (email !== confirmEmail) {
      alert("メールアドレスが一致しません");
      return;
    }

    sendEmail();
    alert("お問い合わせを受け付けました。");
    document.getElementsByClassName("modal-close-button")[0]?.click();
  };

  const form = useRef();
  const sendEmail = async () => {
    if (!form.current) return;
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://qlbnadimyn6wyplzguyqrwleia0psudo.lambda-url.ap-northeast-1.on.aws/", true);
    xhr.setRequestHeader("content-type", "text/plain");
    const request = `name=${formData.name}&email=${formData.email}&message=${formData.message}&category=${formData.inquiryType}&ageGroup=${formData.ageGroup}`;
    xhr.send(request);
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form} ref={form}>
      <div style={styles.field}>
        <h1 style={{ textAlign: "center" }}>
          <TextWithRuby text={"お問い合わせ"} anotherRuby={{ 問: "と" }} />
        </h1>
        <label htmlFor="name" style={styles.label}>
          <TextWithRuby text={"氏名:"} />
          <span
            style={{
              backgroundColor: "#b0ef63",
              padding: "1px 5px",
              borderRadius: "5px"
            }}
          >
            <TextWithRuby text={"必須"} />
          </span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={styles.input}
          required
        />
      </div>

      <div style={styles.field}>
        <label htmlFor="email" style={styles.label}>
          <TextWithRuby text={"メールアドレス:"} />
          <span
            style={{
              backgroundColor: "#b0ef63",
              padding: "1px 5px",
              borderRadius: "5px"
            }}
          >
            <TextWithRuby text={"必須"} />
          </span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
      </div>

      <div style={styles.field}>
        <label htmlFor="confirmEmail" style={styles.label}>
          <TextWithRuby text={"メールアドレス（確認用）:"} />
          <span
            style={{
              backgroundColor: "#b0ef63",
              padding: "1px 5px",
              borderRadius: "5px"
            }}
          >
            <TextWithRuby text={"必須"} />
          </span>
        </label>
        <input
          type="email"
          id="confirmEmail"
          name="confirmEmail"
          value={formData.confirmEmail}
          onChange={handleChange}
          style={{
            ...styles.input,
            borderColor: formData.email === formData.confirmEmail ? "#ccc" : "red"
          }}
          required
        />
      </div>

      <div style={styles.field}>
        <label htmlFor="ageGroup" style={styles.label}>
          <TextWithRuby text={"年齢:"} />
        </label>
        <div
          className="custom-dropdown"
          style={{
            position: "relative",
            cursor: "pointer",
            width: "100%"
          }}
        >
          <div
            onClick={() => setIsAgeDropdownOpen(!isAgeDropdownOpen)}
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              background: "#fff",
              borderRadius: "5px"
            }}
          >
            <TextWithRuby text={formData.ageGroup} />
          </div>
          {isAgeDropdownOpen && (
            <ul
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                background: "#fff",
                border: "1px solid #ccc",
                listStyle: "none",
                padding: 0,
                margin: 0,
                borderRadius: "5px",
                zIndex: 1000
              }}
            >
              {ageGroups.map((group, index) => (
                <li
                  key={index}
                  onClick={() => handleDropdownSelect("ageGroup", group)}
                  style={{
                    padding: "10px",
                    borderBottom: "1px solid #eee",
                    cursor: "pointer"
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#f0f0f0")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  <TextWithRuby text={group} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div style={styles.field}>
        <label htmlFor="inquiryType" style={styles.label}>
          <TextWithRuby text={"お問い合わせ種別:"} anotherRuby={{ 問: "と" }} />
          <span
            style={{
              backgroundColor: "#b0ef63",
              padding: "1px 5px",
              borderRadius: "5px"
            }}
          >
            <TextWithRuby text={"必須"} />
          </span>
        </label>
        <div
          className="custom-dropdown"
          style={{
            position: "relative",
            cursor: "pointer",
            width: "100%"
          }}
        >
          <div
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            style={{
              padding: "10px",
              border: "1px solid #ccc",
              background: "#fff",
              borderRadius: "5px"
            }}
          >
            <TextWithRuby text={formData.inquiryType} />
          </div>
          {isDropdownOpen && (
            <ul
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                background: "#fff",
                border: "1px solid #ccc",
                listStyle: "none",
                padding: 0,
                margin: 0,
                borderRadius: "5px",
                zIndex: 1000,
                width: "100%"
              }}
            >
              {inquiryTypes.map(type => (
                <li
                  key={type.value}
                  onClick={() => handleDropdownSelect("inquiryType", type.value)}
                  style={{
                    padding: "10px",
                    borderBottom: "1px solid #eee",
                    cursor: "pointer"
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#f0f0f0")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  <TextWithRuby text={type.label} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div style={styles.field}>
        <label htmlFor="message" style={styles.label}>
          <TextWithRuby text={"お問い合わせ内容:"} anotherRuby={{ 問: "と" }} />
          <span
            style={{
              backgroundColor: "#b0ef63",
              padding: "1px 5px",
              borderRadius: "5px"
            }}
          >
            <TextWithRuby text={"必須"} />
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={styles.textarea}
          rows="5"
          required
        ></textarea>
      </div>

      <div
        className="husen green"
        style={{
          display: "flex",
          justifyContent: "center",
          cursor: "pointer",
          margin: "0 auto"
        }}
        onClick={e => {
          handleSubmit(e);
        }}
      >
        <TextWithRuby text={"送信する"} textAlign="center" />
        <span></span>
      </div>
    </form>
  );
}

const styles = {
  form: {
    width: "80%",
    maxWidth: "400px",
    margin: "0 auto",
    padding: "1em",
    borderRadius: "5px",
    PointerEvent: "all"
  },
  field: {
    marginBottom: "1em"
  },
  label: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "0.5em",
    marginLeft: "0.2em",
    fontWeight: "bold"
  },
  input: {
    width: "100%",
    padding: "0.5em",
    border: "1px solid #ccc",
    borderRadius: "3px",
    backgroundColor: "#fdfdfd"
  },
  textarea: {
    width: "100%",
    padding: "0.5em",
    border: "1px solid #ccc",
    borderRadius: "3px",
    backgroundColor: "#fdfdfd"
  }
};
