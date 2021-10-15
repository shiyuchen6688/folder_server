import React, { useState } from 'react';

function App() {
  return (
    <div>
      <Folder name="Folder1">
        <Folder name="Folder2">
          <File name="File2" />
          <File name="File3" />
        </Folder>
        <File name="File1" />
      </Folder>
      <Folder name="Folder3" />

    </div>
  );
}

const Folder = (props) => {
  const { name, children } = props;
  const [isOpen, setIsOpen] = useState(false);

  const direction = isOpen ? "down" : "right";
  const folderState = isOpen ? " open " : " ";



  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <span onClick={handleClick}>
        <i className={`angle ${direction} icon`}></i>
        <i className={`blue folder${folderState}icon`}></i>
        {props.name}
      </span>
      <div style={{ margin: '17px' }}>
        {isOpen ? props.children : null}
      </div>
    </div>
  );
}

const File = (props) => {
  return <h5>{props.name}</h5>
}
export default App;
