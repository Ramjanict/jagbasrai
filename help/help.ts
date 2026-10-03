export const getYouTubeEmbedUrl = (url?: string) => {
  if (!url) return "";
  const regExp = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/;
  const match = url.match(regExp);
  return match ? `https://www.youtube.com/embed/${match[1]}` : url;
};

export const normalizeYouTubeUrl = (url?: string): string => {
  if (!url) return "";

  let cleaned = url.replace(/\s+/g, "");

  cleaned = cleaned.replace("www.youtu.be", "youtu.be");
  return cleaned;
};

export const formatTextByLines = (text: string, linesPerParagraph = 6) => {
  const lines = text
    .split("\n\n")
    .map((line) => line.trim())
    .filter((line) => line !== "");

  const paragraphs: string[] = [];
  for (let i = 0; i < lines.length; i += linesPerParagraph) {
    const chunk = lines.slice(i, i + linesPerParagraph).join(" ");
    paragraphs.push(`<p>${chunk}</p>`);
  }

  return paragraphs.join("");
};
