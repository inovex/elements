/**
 * API endpoint for code highlighting.
 * 
 * Moved to an API because loading the shiki highlighter used by Code-Hike was async and caused compiling issues in the preview-box component used by the patterns page.
 * Allows for reusability when multiple preview-boxes are rendered with different preview code.
 */
import { NextApiRequest, NextApiResponse } from 'next';
import { getHighlighter } from 'shiki';

export default async function highlighter(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { code, language } = req.body;

  if (!code || !language) {
    return res.status(400).json({ error: 'Code and language are required.' });
  }

  try {
    const highlighter = await getHighlighter({ theme: 'dark-plus' });
    const highlightedCode = highlighter.codeToHtml(code, {
      lang: language,
      theme: 'dark-plus',
    });

    return res.status(200).json({ highlightedCode });
  } catch (error) {
    return res.status(500).json({ error: 'Error highlighting the code.' });
  }
}
