export async function download (fileUrl, name)   {
  
    try {
      const response = await fetch(fileUrl);
      const blob = await response.blob();

      // Create a temporary link
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = name;

      // Append the link to the document
      document.body.appendChild(link);

      // Trigger a click event on the link to start the download
      link.click();

      // Remove the link from the document
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };
