import { useContext } from 'react'
import DataContext from '../../context/context'
import './DownloadFile.css'

const DownloadFile = () => {
  const context = useContext(DataContext)

  if (!context) {
    throw new Error("DataContext debe ser usado dentro de un DataProvider")
  }

  const { pdfFileUrl } = context

  return (
    <div className="DownloadFile">
      {pdfFileUrl && (
        <a href={pdfFileUrl} download="converted.pdf" className="btn btn-success mt-3">
          Download PDF
        </a>
      )}
    </div>
  )
}

export default DownloadFile
