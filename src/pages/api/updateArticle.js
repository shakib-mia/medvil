// /app/api/updateArticle.js
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    // If the request method is not POST, return 405 Method Not Allowed.
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    // Adjust the path as necessary to point to your JSON file location.
    const filePath = path.resolve('./public', 'articles.json');

    // Validate existence of the file.
    if (!fs.existsSync(filePath)) {
      console.error(
        'articles.json file does not exist at the expected location:',
        filePath
      );
      return res.status(500).json({ message: 'Articles file not found.' });
    }

    // Assuming the body of the request contains the articles to update.
    // Ensure the body is not empty.
    if (!req.body || Object.keys(req.body).length === 0) {
      console.error('Empty request body.');
      return res.status(400).json({ message: 'Request body is empty.' });
    }

    const updatedArticles = req.body;

    // Update the file with the new articles data.
    fs.writeFileSync(
      filePath,
      JSON.stringify(updatedArticles, null, 2),
      'utf8'
    );

    return res.status(200).json({ updated: true });
  } catch (error) {
    // Log the error for server-side debugging.
    console.error('Error updating articles:', error);

    // Return a 500 Internal Server Error response if an exception occurs.
    return res.status(500).json({ message: 'Failed to update articles.' });
  }
}
