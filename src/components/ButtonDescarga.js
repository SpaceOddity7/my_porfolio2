import './../styles/css/main.css';
import jsPDF from 'jspdf';

class MyComponent extends React.Component {
  handleDownload = () => {
    const pdf = new jsPDF();
    const page = document.getElementById('myPage');
    pdf.addHTML(page, () => {
      pdf.save('my-document.pdf');
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleDownload}>Descargar como PDF</button>
        <div id="myPage">
          {}
        </div>
      </div>
    );
  }
}
