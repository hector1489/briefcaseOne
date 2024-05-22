import { useContext } from 'react'
import DataContext from '../../context/context'
import './DownloadFile.css'

const DownloadFile = () => {
  const { pdfFileUrl } = useContext(DataContext)

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
