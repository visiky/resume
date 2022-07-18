export function convertHTML(str) {
  const repEnt = ent => {
    switch (ent) {
      case '&':
        return '$amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      case "'":
        return '&apos;';
    }
  };
  return str.replace(/[&<>"']/g, repEnt);
}
