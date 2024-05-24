import { useState, ChangeEvent, useContext } from 'react'
import { Form, InputGroup, Button } from 'react-bootstrap'
import { ENDPOINT } from '../config/constans'
import './Charger.css'
import DataContext from '../../context/context'

const Charger = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const context = useContext(DataContext)

  if (!context) {
    throw new Error("DataContext debe ser usado dentro de un DataProvider")
  }

  const { setPdfFileUrl } = context

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      if (file.type !== 'application/vnd.oasis.opendocument.text') {
        setError('Solo se permiten archivos ODT.')
        return
      }
      setSelectedFile(file)
      setError(null)
    }
  }

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData()
      formData.append('file', selectedFile)

      setIsLoading(true)
      setError(null);

      fetch(ENDPOINT.fileUpload, {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Error al convertir el archivo')
          }
          return response.blob()
        })
        .then((blob) => {
          const url = window.URL.createObjectURL(blob)
          setPdfFileUrl(url)
        })
        .catch((error) => {
          setError(error.message)
          console.error('Error:', error)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }

  return (
    <div className='ChargerComponent p-2 d-flex justify-content-center align-items-center'>
      <form>
        <Form.Label htmlFor="basic-url" className='text-white'>⬆️ Upload <span className='text-warning'>ODT</span> File</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            type="file"
            id="file-upload"
            aria-describedby="file-addon"
            onChange={handleFileChange}
          />
          <Button variant="primary" onClick={handleUpload} disabled={isLoading}>
            {isLoading ? 'Uploading...' : 'Upload'}
          </Button>
        </InputGroup>
        {error && <div className="text-danger">{error}</div>}
      </form>
    </div>
  )
}

export default Charger
