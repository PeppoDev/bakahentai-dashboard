import React from "react";
//hooks
import { useOutsideAlerter } from "../../hooks/outsideAlerter";
//css
import "./styles.scss";
//assets
import playIcon from "../../assets/icons/play.svg";

function ComboSelect(props) {
  const [text, setText] = React.useState("");
  const { visible, setVisible, ref } = useOutsideAlerter(false);

  const [visibleLocal, setVisibleLocal] = React.useState(false);
  
  
  function handleClick(key) {
    let valuetemp = Array.from(props.value);
    valuetemp.forEach((element, i) => {
      if (valuetemp[i] === key) {
        valuetemp.splice(valuetemp.indexOf(key), 1);
      }
    });
    props.onChange(valuetemp);
  }

  function handleText() {
    if (props.placeholder) {
      return props.placeholder;
    } else if (!props.multiple && props.value !== "") {
      return props.value;
    } else {
      return "Selecionar";
    }
  }
  function handleVisible() {
    setVisibleLocal(visibleLocal ? false : true);
  }

  React.useEffect(() => {
    setText(handleText);
  }, [visibleLocal]);

  return (
    <article
      className="main-select"
    >
      <article onClick={handleVisible}>
        <p>{text}</p>
        <img src={playIcon} alt="" />
      </article>
      {visible && (
        <div ref={ref} className="options-list" >
          {props.data.map((data) => (
            <ComboItem
              style={props.value.includes(data)?{backgroundColor: "var(--color-primary-pink)"}:{}}
              key={data}
              className={
                  "combo-item"
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

function ComboItem({ value, text, className, onClick, style }) {
  return (
    <>
      <option className={className} value={value} onClick={onClick} style={style}>
        {text}
      </option>
    </>
  );
}

export { ComboItem, ComboSelect };
