import React, {useEffect, useState} from "react";
import { openDB } from "idb";
import MemoEditor from "./MemoEditor";

const DB_NAME = "image-storage";
const STORE_NAME = "images";



async function initDB() {
    return openDB(DB_NAME, 1, {
        upgrade(db) {
            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME);
            }
        },
    });
}

export default function ImageUploader({category}) {
    const [image, setImage] = useState(null);
    const [currentDate, setCurrentDate] = useState(new Date());
    const [memo, setMemo] = useState("");
    const [memoStatus, setMemoStatus] = useState("empty");
    const [darkMode, setDarkMode] = useState(false);
    const getLocalDateKey = (date) => {
      const y = date.getFullYear();
      const m = String(date.getMonth() + 1).padStart(2, "0");
      const d = String(date.getDate()).padStart(2, "0");
      return `${category}_${y}-${m}-${d}`;
    };
     const loadImageForDate = async (date) => {
       const db = await initDB();
       const dateKey = getLocalDateKey(date);

       const imageBlob = await db.get(STORE_NAME, `${dateKey}:image`);
       const memoData = await db.get(STORE_NAME, `${dateKey}:memo`);

       if (imageBlob) {
         const imageUrl = URL.createObjectURL(imageBlob);
         setImage(imageUrl);
       } else {
         setImage(null);
       }

       setMemo(memoData || "");
       setMemoStatus(memoData ? "saved" : "empty");
     };

    useEffect(() => {
      loadImageForDate(currentDate);
    }, []);

    useEffect(() => {
      loadImageForDate(currentDate);
    }, [currentDate, category]);

    useEffect(()=> {
        document.body.classList.toggle("dark-mode", darkMode);
    }, [darkMode]);

    const moveDate = (days) => {
        const newDate = new Date(currentDate);
        newDate.setDate(newDate.getDate() + days);
        setCurrentDate(newDate);
    };

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const db = await initDB();
        const dataKey = getLocalDateKey(currentDate);

        await db.put(STORE_NAME, file, `${dataKey}:image`);

        const imageUrl = URL.createObjectURL(file);
        setImage(imageUrl);
    };

    const handleDeleteImage = async () => {
        const confirmed = window.confirm("정말 이미지를 삭제하나요..?");
        if(!confirmed) return;

        const db = await initDB();
        const dateKey = getLocalDateKey(currentDate);

        await db.delete(STORE_NAME, `${dateKey}:image`);
        setImage(null);
    }

    const saveMemo = async () => {
        if (!memo.trim()) {
            alert("입력한 메모가 없습니다.");
            return;
        }

        const db = await initDB();
        const dateKey = getLocalDateKey(currentDate);
        await db.put(STORE_NAME, memo, `${dateKey}:memo`);
        alert("메모가 저장되었습니다");
        setMemoStatus("saved");
    }

    const handleMemoChange = async (e) => {
        const newMemo = e.target.value;
        setMemo(newMemo);

        setMemoStatus(newMemo.trim() === "" ? "empty" : "editing");

        const db = await initDB();
        const dateKey = getLocalDateKey(currentDate);
        
        
        await db.put(STORE_NAME, newMemo, `${dateKey}:memo`);
    };

    const isFutureDate = (date) => {
        const today = new Date();
        today.setHours(0,0,0,0);
        return date > today;
    };

    return (
      <div>
        <div className="fixed-date-controls">
          <h2 className="date-heading">
            {getLocalDateKey(currentDate).replace(/^.*?_/, "")}
          </h2>

          <div className="button-heading">
            <button onClick={() => moveDate(-1)}>◀ prev</button>
            <button
              onClick={() => moveDate(1)}
              disabled={isFutureDate(currentDate)}
            >
              next ▶
            </button>
          </div>

         
        </div>

        {!image && (
          <input type="file" accept="image/*" onChange={handleImageChange} />
        )}
        {image ? (
          <div
            className="responsive-image-container mt-4"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                display: "inline-block",
                width: "100%",
                maxWidth: "600px",
              }}
            >
              <img
                src={image}
                alt="Stored"
                className="responsive-image"
                style={{
                  width: "100%",
                  display: "block",
                  objectFit: "contain",
                }}
              />
              <button
                onClick={handleDeleteImage}
                style={{
                  position: "absolute",
                  bottom: "0.5rem",
                  right: "0.5rem",
                  backgroundColor: "#fff",
                  border: "1px solid ",
                  marginTop: "0.5rem",
                  cursor: "pointer",
                }}
              >
                ❌
              </button>
            </div>
          </div>
        ) : (
          <p className="mt-4">이 날짜에 저장된 이미지가 없습니다.</p>
        )}

        <MemoEditor
          memo={memo}
          onChange={handleMemoChange}
          onSave={saveMemo}
          status={memoStatus}
        />
        <button onClick={() => setDarkMode((prev) => !prev)}>
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    );
}

