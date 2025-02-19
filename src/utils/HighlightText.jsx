export const HighlightText = ({ text }) => {
  const parseText = (input) => {
    const parts = input.split(/(\*\*.*?\*\*)/); // Split by **highlight** pattern

    return parts.map((part, index) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        const highlightedText = part.slice(2, -2); // Remove the ** from both ends
        return (
          <span key={index} className="keyword">
            {highlightedText}
          </span>
        );
      }
      return part; // Normal text
    });
  };

  return <>{parseText(text)}</>;
};

export default HighlightText;
