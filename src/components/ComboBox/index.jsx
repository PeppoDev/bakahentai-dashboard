import React from "react";
//css
import "./styles.scss";
//assets
import playIcon from "../../assets/icons/play.svg";

function ComboSelect(props) {
  const selectRef = React.useRef();
  const [showList, setshowList] = React.useState(false);

  function handleClick(key) {
    let valuetemp = Array.from(props.value);
    valuetemp.forEach((element, i) => {
      if (valuetemp[i] === key) {
        valuetemp.splice(valuetemp.indexOf(key), 1);
      }
    });

    props.onChange(valuetemp);
  }

  return (
    <article
      className="main-select"
      onClick={() => setshowList((prev) => (prev ? false : true))}
    >
      <article>
        <p>
          {!props.multiple && props.value !== "" ? props.value : "Selecionar"}
        </p>
        <img src={playIcon} onClick={() => selectRef.current.click()} alt="" />
      </article>
      {showList ? (
        <div className="options-list">
          {props.data.map((data) => (
            <ComboItem
              key={data}
              className={
                props.value.includes(data)
                  ? "selected-option combo-item"
                  : "combo-item"
              }
              value={data}
              text={data}
              onClick={
                props.value.includes(data)
                  ? () => handleClick(data)
                  : () => props.onChange(data)
              }
            />
          ))}
        </div>
      ) : (
        ""
      )}

      {/* <select
        ref={selectRef}
        className="combo-select"
        name={props.htmlFor}
        id={props.htmlFor}
        mutiple={props.mutiple}
        onChange={
          props.mutiple
            ? (event) => props.onChange(event.target.value)
            : (event) => props.onChange(event.target.value)
        }
      >
        {props.defaultValue ? (
          <option
            className="combo-item"
            value={props.defaultValue}
            defaultValue
          >
            {props.defaultValue}
          </option>
        ) : (
          <option className="combo-item" value={null} defaultValue>
            Selecionar
          </option>
        )}
      </select> */}
    </article>
  );
}

function ComboItem({ value, text, className, onClick }) {
  return (
    <>
      <option className={className} value={value} onClick={onClick}>
        {text}
      </option>
    </>
  );
}

export { ComboItem, ComboSelect };
