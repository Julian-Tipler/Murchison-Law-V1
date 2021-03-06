import React from "react";
import { useState } from "react";
import Category from "./Category"

export default function PracticeIndustries() {
  const [useCategory, setCategory] = useState("");

  const categoryClick = (e) => {
    setCategory(e.target.value); 
  };

  return (
    <div>
      <div>Practice & Industries Page</div>
      <div>
        <div>Category Sidebar Header</div>
        <div onClick={categoryClick}>Marijuana Law</div>
        <div onClick={categoryClick}>Criminal Law</div>
        <div onClick={categoryClick}>Traffic Law</div>
      </div>
      <div>
        <Category searchTerm={useCategory} />
      </div>
    </div>
  );
}
