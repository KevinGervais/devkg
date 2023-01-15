export function getFileSize(str: string): number {
  return (str.length * 3 / 4 - str.split("=").length - 1) / 1024 / 1024
}