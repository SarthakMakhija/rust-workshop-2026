import React from 'react';

interface CodeBlockProps {
  code: string;
  style?: React.CSSProperties;
  className?: string;
}

/**
 * A lightweight syntax highlighter that targets Rust-style comments (//).
 * Wraps comments in a styled <span> while preserving white-space and layout.
 */
const CodeBlock: React.FC<CodeBlockProps> = ({ code, style, className }) => {
  // Regex to find content starting with // until the end of the line
  // We process it line by line to ensure correct wrapping
  const highlightedLines = code.split('\n').map((line) => {
    const commentIndex = line.indexOf('//');
    
    if (commentIndex !== -1) {
      const codePart = line.substring(0, commentIndex);
      const commentPart = line.substring(commentIndex);
      const isError = commentPart.trim().startsWith('// ERROR:');
      
      // Escape HTML entities to prevent XSS (minimal but important)
      const escapedCode = codePart.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      const escapedComment = commentPart.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      
      const className = isError ? 'code-comment code-error-comment' : 'code-comment';
      return `${escapedCode}<span class="${className}">${escapedComment}</span>`;
    }
    
    return line.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  });

  const finalHtml = highlightedLines.join('\n');

  return (
    <pre 
      style={style} 
      className={className}
      dangerouslySetInnerHTML={{ __html: finalHtml }}
    />
  );
};

export default CodeBlock;
