import React, { useState, useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accomplishment from './Components/accomplishment';
import Challenges from './Components/challenges';
import FinancialEvalution from './Components/financilaEvalution';
import LastMonthExpese from './Components/lastMonthExpenses';
import ThisMonthExpese from './Components/thisMonthExpenses';
import jspdf from "jspdf";
import html2canvas from 'html2canvas'
const App = () => {
  const tokenTaxRef = useRef();
  const [pdfLoading, setPdfLoading] = useState(false)
  const print = async () => {
    setPdfLoading(true)
    setTimeout(async () => {
      let pdf = new jspdf("p", "mm");
      await html2canvas(tokenTaxRef.current, {
        scrollX: 0,
        scrollY: -window.scrollY,
        letterSpacing: "20px",
        // backgroundColor: "#fbfbfb",
      }).then((canvas) => {
        let margin = 1;
        let imgWidth = 210 - 2 * margin;
        let pageHeight = 295;
        let imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;
        pdf.addImage(
          canvas.toDataURL("image/png"),
          "PNG",
          margin,
          position,
          imgWidth,
          imgHeight
        );
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
          position = heightLeft - imgHeight;
          pdf.addPage();
          pdf.addImage(
            canvas.toDataURL("image/png"),
            "PNG",
            margin,
            position,
            imgWidth,
            imgHeight
          );
          heightLeft -= pageHeight;
        }
        const fileName = new Date() + "-Report";
        pdf.save(fileName);
        setPdfLoading(false)
      });
    }, 100);
  };
  return (
    <>
      <div className="app p-5 container" ref={tokenTaxRef}>

        <Accomplishment />
        <Challenges />
        <FinancialEvalution />
        <LastMonthExpese />
        <ThisMonthExpese />
      </div>

      <div className="container  px-5 mb-5">
        <button disabled={pdfLoading} onClick={print} type="button" className="btn btn-danger">Download PDF</button>
        <button type="button" className="btn btn-primary mx-4">Submit</button>
      </div>
    </>
  );
}

export default App;