import Alexandra_Mitchell_CV (1).docx.*;

public class WordToHtml {
  public static void main(String[] args) {
    // Create a Document instance
    Document document = new Document();
    // Load a Word document
    document.loadFromFile("/Users/alexandramitchell/Library/Mobile Documents/com~apple~CloudDocs/IMPORTANT/Uni/Alexandra_Mitchell_CV (1).docx");
    
    //Save the document as HTML
    document.saveToFile("output/toHtml.html", FileFormat.Html);
  }
}
