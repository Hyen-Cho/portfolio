import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

class App extends Component {
  constructor() {
    super();
    this.onDrop = (files) => {
      this.setState({ files })
    };
    this.state = {
      files: []
    };
  }

  render() {
    console.info(this.state.files);
    const files = this.state.files.map(file => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
      </li>
    ));

    return (
      <Dropzone onDrop={this.onDrop}>
        {({ getRootProps, getInputProps }) => (
          <section className="container">
            <div {...getRootProps({ className: 'dropzone' })}>
              <input {...getInputProps()} />
              <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <aside>
              <h4>Files</h4>
              <ul>{files}</ul>
            </aside>
          </section>
        )}
      </Dropzone>
    );
  }
}

export default App;
