import { useState, ChangeEvent } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap'

const Charger = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('excelFile', selectedFile);

      // Aquí puedes agregar tu lógica para enviar formData al backend
      // fetch(url, {
      //   method: 'POST',
      //   body: formData,
      // })
      // .then(response => response.json())
      // .then(data => console.log(data))
      // .catch(error => console.error('Error:', error));
    }
  };

  return (
    <>
      <Form.Label htmlFor="basic-url">Upload Excel File</Form.Label>
      <InputGroup className="mb-3">
      <Form.Control
          type="file"
          id="excel-upload"
          aria-describedby="excel-addon"
          onChange={handleFileChange}
        />
        <Button variant="primary" onClick={handleUpload}>
          Upload
        </Button>
      </InputGroup>
    </>
  )
}

export default Charger

