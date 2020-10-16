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

  const styleimg = visible ? { transform: "rotate(90deg)" } : {};

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
  function handleVisible(event) {
    setVisible(true);
  }

  React.useEffect(() => {
    setText(handleText);
  }, []);

  return (
    <article className="main-select">
      <article onClick={(e) => handleVisible(e)}>
        <p>{text}</p>
        <img src={playIcon} alt="" style={styleimg} />
      </article>
      {visible && (
        <div ref={ref} className="options-list">
          <div
            className="closer-select"
            onClick={() => setVisible(false)}
          ></div>
          <div className="options">
            {props.data.map((data, index) => (
              <ComboItem
                style={
                  props.value.includes(data)
                    ? {
                        backgroundColor: "var(--color-primary-pink)",
                        animationDelay: `${index * 0.01}s`,
                      }
                    : {
                        backgroundColor: "rgba(11, 9, 12, .8)",
                        animationDelay: `${index * 0.01}s`,
                      }
                }
                key={data}
                className="combo-item"
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
        </div>
      )}
    </article>
  );
}

function ComboItem({ value, text, className, onClick, style }) {
  return (
    <>
      <option
        className={className}
        value={value}
        onClick={onClick}
        style={style}
      >
        {text}
      </option>
    </>
  );
}

export { ComboItem, ComboSelect };
