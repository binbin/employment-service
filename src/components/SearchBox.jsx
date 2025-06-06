import React, { useState, useEffect } from "react";
import "./SearchBox.css";

export default function SearchBox({
  placeholder = "请输入搜索关键词...",
  onSearch,
}) {
  const [searchTerm, setSearchTerm] = useState("");

  // 实时搜索功能
  useEffect(() => {
    if (onSearch) {
      onSearch(searchTerm);
    }
  }, [searchTerm, onSearch]);

  const handleClear = () => {
    setSearchTerm("");
  };

  return (
    <div className="search-box">
      <div className="search-input-wrapper">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder}
          className="search-input"
        />
        {searchTerm && (
          <button
            type="button"
            onClick={handleClear}
            className="search-clear-btn"
            aria-label="清除搜索"
            title="清除搜索"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}
