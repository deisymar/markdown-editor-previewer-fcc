const Editor = (props) => {
  return (
    <textarea
      id="editor"
      type="text"
      value={props.markdown}
      onChange={props.handleTextareaChange}
    />
  );
};

export default Editor;
