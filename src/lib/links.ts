export const isExternal = (href: string): boolean => /^https?:\/\//i.test(href)
