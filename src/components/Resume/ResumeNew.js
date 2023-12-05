import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const ResumeNew = () => {
  const [width, setWidth] = useState(1100);
  const [pageNumber, setPageNumber] = useState(1);
  const onDocumentLoadSuccess = () => {
    setPageNumber(pageNumber);
  }
  
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []); 

  return (
    <div className="resume-box">
      <Container fluid className="resume-section"> 
        <Row className="resume">
          <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}> 
             <Page pageNumber={pageNumber} scale={width > 786 ? 1.5 : 0.6} /> 
           </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank" className="download-button">
            <AiOutlineDownload />
            &nbsp; Download  CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;