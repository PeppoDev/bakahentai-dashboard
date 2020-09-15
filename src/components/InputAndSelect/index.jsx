import React from "react";
//components
import MainInput from "../Input";
import * as ComboBox from "../ComboBox";
import Badge from "../Badge";
//css
import "./styles.scss";

export default function InputAndSelect({ setTags, data, badges }) {
    
  return (
    <>
      <article className="input-n-select">
        <MainInput
          type="search"
          label="Gêneros"
          placeholder={placholderGender}
          value={tagsTemp}
          onChange={setTagsTemp}
          onKeyPress={handleTags}
        />
        <ComboBox.ComboSelect
          htmlFor="tags"
          value={tags}
          onChange={handleSetTags}
          multiple={true}
        >
          {data.map((tag, key) => (
            <ComboBox.ComboItem
              key={key}
              value={tag}
              text={tag}
            ></ComboBox.ComboItem>
          ))}
        </ComboBox.ComboSelect>
      </article>
      <article className="badge-group">
        {badges.map((tag, index) => (
          <Badge
            text={tag}
            key={index}
            index={index}
            onClick={handleRemoveBadge}
          />
        ))}
      </article>
    </>
  );
}
