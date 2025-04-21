import React from "react";
import "../App.css";

export default function MemoEditor({ memo, onChange, onSave }) {
  return (
    <div
      className="memo-container mt-4"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <textarea
          value={memo}
          onChange={onChange}
          placeholder="메모를 입력하세요..."
          className="responsive-textarea"
          rows={4}
          style={{
            width: "100%",
            padding: "1rem",
            paddingBottom: "2.5rem",
            boxSizing: "border-box",
            resize:"vertical"
          }}
        ></textarea>
        <button
          onClick={onSave}
          style={{
            position: "absolute",
            bottom: "0.5rem",
            right: "0.5rem",
            backgroundColor: "#f0f0f0",
            border: "1px solid ",
            cursor: "pointer",
          }}
        >
          💾
        </button>
      </div>
    </div>
  );
}
