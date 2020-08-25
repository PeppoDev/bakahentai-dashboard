import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import upIcon from "../../assets/icons/upload.svg";
import "./styles.scss";

export default function MyDropzone({ countGroup }) {
  const [groupImages, setGroupImages] = React.useState(0);
  var count = 0;

  const onDrop = useCallback((acceptedFiles) => {
    count = count + acceptedFiles.length;

    console.log(count);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="drangdrop-container">
      <div className="dragndrop" {...getRootProps()}>
        <img src={upIcon} alt="" />
        <div></div>
        <input {...getInputProps()} />
        {isDragActive ? <p>Solte Aqui</p> : <p>Clique ou Arraste Aqui</p>}
      </div>

      {countGroup ? (
        <article className="count-group">
          <span>6</span>
          <span>5</span>
          <span>4</span>
          <span>3</span>
          <span>2</span>
          <span>1</span>
          <span>+</span>
        </article>
      ) : null}
    </div>
  );
}
