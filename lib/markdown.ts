import { marked } from 'marked'

// Configure marked for safe, clean rendering
marked.setOptions({
  gfm: true,
  breaks: true,
})

export function renderMarkdown(content: string): string {
  if (!content) return ''
  const html = marked.parse(content)
  // marked.parse can return string or Promise<string> depending on options;
  // with our sync options it returns a string
  return typeof html === 'string' ? html : ''
}